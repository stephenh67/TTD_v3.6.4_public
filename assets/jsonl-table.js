/*
 * jsonl-table.js — TTD v3.6.4
 * Purpose: Render JSONL (newline-delimited JSON) into an HTML table.
 * Scope: Single custom JS, no external dependencies, CSP-safe.
 * License: Apache-2.0
 */

(function () {
  "use strict";

  /**
   * Render a JSONL string into a <table>.
   * @param {string} jsonl - newline-delimited JSON
   * @param {HTMLElement} container - DOM node to append table
   */
  function renderJSONLTable(jsonl, container) {
    if (!jsonl || !container) return;

    const rows = jsonl.trim().split("\n").map(line => {
      try {
        return JSON.parse(line);
      } catch (e) {
        return { error: "Invalid JSON: " + line };
      }
    });

    if (rows.length === 0) return;

    const headers = Object.keys(rows[0]);

    // Build table
    const table = document.createElement("table");
    table.className = "jsonl-table";

    // Header row
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(h => {
      const th = document.createElement("th");
      th.textContent = h;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Body rows
    const tbody = document.createElement("tbody");
    rows.forEach(r => {
      const tr = document.createElement("tr");
      headers.forEach(h => {
        const td = document.createElement("td");
        td.textContent = r[h] !== undefined ? String(r[h]) : "";
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Replace container contents
    container.innerHTML = "";
    container.appendChild(table);
  }

  // Expose globally
  window.renderJSONLTable = renderJSONLTable;
})();
