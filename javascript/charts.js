document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("toggleBtn");
  const content = document.getElementById("spotifyContent");

  if (!btn || !content) {
    console.error("Element tidak ditemukan!");
    return;
  }

  let loaded = false;
  let isOpen = false;

  btn.addEventListener("click", async () => {

    isOpen = !isOpen;

    // 🔥 TOGGLE BUTTON TEXT
    if (isOpen) {
      btn.textContent = "READ LESS";
      btn.classList.add("active");
      content.style.display = "block";
    } else {
      btn.textContent = "READ MORE";
      btn.classList.remove("active");
      content.style.display = "none";
      return;
    }

    if (loaded) return;
    loaded = true;

    content.innerHTML = "Loading...";

    try {
      const res = await fetch("https://jimin-counter.onrender.com/jimin-counter");
      const data = await res.json();

      const prevTotal = parseInt(localStorage.getItem("jimin_total")) || 0;

      let display = data;

      // 🔥 ANTI MINUS SYSTEM
      if (data.totalStreams < prevTotal) {
        const saved = JSON.parse(localStorage.getItem("jimin_full"));
        if (saved) display = saved;
      } else {
        localStorage.setItem("jimin_total", data.totalStreams);
        localStorage.setItem("jimin_full", JSON.stringify(data));
      }

      // 🔥 FORMAT TANGGAL DARI KWORB → KST STYLE
      let formattedDate = display.updated;

      if (display.updated && display.updated.includes("/")) {
        const [year, month, day] = display.updated.split("/");
        formattedDate =` ${day}/${month}/${year}`;
      }

      // 🔥 OUTPUT TABLE
      content.innerHTML = `
        <h3>JIMIN SPOTIFY COUNTER</h3>

        <p>Jimin Spotify Counter Streaming</p>

        <div>Update: ${formattedDate} (KST)</div>

        <div>
          Total Streams: ${display.totalStreams.toLocaleString()}
          <br>
        </div>

        <table class="spotify-table">
          <thead>
            <tr>
              <th>Song Title</th>
              <th>Streams</th>
              <th>Daily</th>
            </tr>
          </thead>
          <tbody id="songTable"></tbody>
        </table>
      `;

      const table = document.getElementById("songTable");

      display.songs.forEach(song => {
        table.innerHTML += `
          <tr>
            <td>${song.title}</td>
            <td>${song.streams.toLocaleString()}</td>
            <td>${song.daily.toLocaleString()}</td>
          </tr>
        `;
      });

    } catch (err) {
      console.error(err);
      content.innerHTML = "Gagal ambil data";
    }

  });

});


document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("chartsBtn");
  const content = document.getElementById("chartsContent");

  let loaded = false;

  btn.addEventListener("click", async () => {

    btn.classList.toggle("active");

    // toggle buka tutup
    if (content.style.display === "block") {
      content.style.display = "none";
      btn.innerText = "READ MORE";
      return;
    }

    content.style.display = "block";
    btn.innerText = "READ LESS";

    if (loaded) return;
    loaded = true;

    content.innerHTML = "Loading...";

    try {
      const res = await fetch("https://charts-api-0x1v.onrender.com/jimin-charts");
      const data = await res.json();

      const charts = data.charts;

      let html = `<div><b>Updated:</b> ${data.updated}</div>`;
      html += `<div class="charts-grid">`;

      Object.keys(charts).forEach(song => {

        html += `<div class="chart-box">`;
        html += `<h4>${song}</h4>`;

        Object.keys(charts[song]).forEach(service => {

          const className = service.toLowerCase().replace(/\s/g, "");

          // 🔥 title service
          html += `<div class="${className}"><b>${service}</b></div>`;

          charts[song][service].forEach(item => {

            // 🔥 FIX DATA NEMPEL (INI KUNCINYA)
            const lines = String(item.country).split(/(?=#\d+)/);

            lines.forEach(line => {
              const clean = line.trim();
              if (!clean) return;

              html += `
                <div class="rank ${clean.includes("#1") ? "top1" : ""}">
                  ${clean.startsWith("#") ? clean : `#${item.rank} ${clean}`}
                </div>
              `;
            });

          });

        });

        html += `</div>`;
      });

      html += `</div>`;

      content.innerHTML = html;

    } catch (err) {
      console.error(err);
      content.innerHTML = "Gagal ambil data";
    }

  });

});



document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("chartsBtn");
  const highlightContainer = document.getElementById("highlight-alone-content");

  if (!btn || !highlightContainer) return;

  function generateHighlight() {

    const chartBoxes = document.querySelectorAll(".chart-box");

    if (chartBoxes.length === 0) {
      highlightContainer.innerHTML = "⚠️ Chart belum siap...";
      return;
    }

    let grouped = {};

    chartBoxes.forEach(box => {

      const song = box.querySelector("h4")?.innerText.trim();
      if (!song) return;

      let currentService = "";

      const elements = box.querySelectorAll("*");

      elements.forEach(el => {

        const text = el.innerText?.trim();
        if (!text) return;

        // service
        if (
          text === "Spotify" ||
          text === "Apple Music" ||
          text === "iTunes" ||
          text === "Deezer" ||
          text === "Youtube" ||
          text === "Shazam"
        ) {
          currentService = text;
          return;
        }

        // rank
        const match = text.match(/^#(\d+)\s(.+)/);
        if (!match) return;

        const rank = parseInt(match[1]);
        const country = match[2];

        if (rank === 1) {

          if (!grouped[song]) grouped[song] = [];

          grouped[song].push({
            service: currentService,
            country
          });
        }

      });

    });

    const sortedSongs = Object.keys(grouped).sort((a, b) => {
      return grouped[b].length - grouped[a].length;
    });

    let html = "";

    sortedSongs.forEach(song => {

      html += `<div class="highlight-song-block">`;
      html += `<div class="highlight-song-title">${song}</div>`;

      grouped[song].forEach(item => {

        const cls = item.service.toLowerCase().replace(/\s/g, "");

        html += `
          <div class="highlight-item ${cls}">
            ⭐ ${song} #1 on ${item.service} ${item.country}
          </div>
        `;
      });

      html += `</div>`;
    });

    highlightContainer.innerHTML = html || "No #1 yet";
  }

  // 🔥 trigger setelah klik + tunggu sampai chart ADA
  btn.addEventListener("click", () => {

    highlightContainer.innerHTML = "⏳ Loading highlights...";

    const interval = setInterval(() => {

      const boxes = document.querySelectorAll(".chart-box");

      if (boxes.length > 0) {
        clearInterval(interval);
        generateHighlight();
      }

    }, 200); // cek tiap 0.2 detik (ringan & cepat)

  });

});
