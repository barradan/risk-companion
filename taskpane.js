:root {
  --navy: #1f3864;
  --ink: #1b1b1b;
  --muted: #605e5c;
  --line: #e3e1df;
  --bg: #ffffff;
  --high: #a4262c;
  --high-bg: #fdf3f4;
  --med: #8a6d00;
  --med-bg: #fdf8e7;
  --low: #1f4e78;
  --low-bg: #eef4fb;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: "Segoe UI", -apple-system, "Helvetica Neue", sans-serif;
  color: var(--ink);
  background: var(--bg);
  font-size: 14px;
  line-height: 1.45;
}

.hidden { display: none; }

#app { padding: 14px 14px 22px; }

.head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
}

.head h1 {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--navy);
  flex: none;
}

.sub {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12px;
}

.card {
  border: 1px solid var(--line);
  border-left-width: 4px;
  border-radius: 6px;
  padding: 10px 12px;
  margin-bottom: 10px;
  background: #fff;
}

.card.high { border-left-color: var(--high); background: var(--high-bg); }
.card.medium { border-left-color: var(--med); background: var(--med-bg); }
.card.low { border-left-color: var(--low); background: var(--low-bg); }

.card-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.card h2 {
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 4px;
}

.ref {
  font-size: 11px;
  color: var(--muted);
  white-space: nowrap;
}

.card p { margin: 0 0 8px; font-size: 13px; }

.evidence {
  font-size: 11px;
  color: var(--muted);
  background: rgba(0,0,0,0.04);
  border-radius: 4px;
  padding: 2px 6px;
  display: inline-block;
  margin-bottom: 8px;
  word-break: break-word;
}

.dismiss {
  font-size: 12px;
  color: var(--navy);
  background: none;
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
}
.dismiss:hover { background: rgba(31,56,100,0.06); }

.empty {
  color: var(--muted);
  font-size: 13px;
  padding: 10px 0;
}

.foot {
  margin-top: 14px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 11px;
}

.loading {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
}
