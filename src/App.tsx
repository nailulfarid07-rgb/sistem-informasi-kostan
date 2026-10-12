import { useMemo, useState, type ReactNode } from "react";

type Page =
  | "home"
  | "login"
  | "dashboard"
  | "rooms"
  | "residents"
  | "rentals"
  | "payments";

type IconName =
  | "home"
  | "grid"
  | "door"
  | "users"
  | "calendar"
  | "wallet"
  | "bell"
  | "search"
  | "plus"
  | "edit"
  | "trash"
  | "arrow"
  | "check"
  | "building"
  | "logout"
  | "close"
  | "eye"
  | "trend"
  | "filter";

const iconPaths: Record<IconName, ReactNode> = {
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>,
  door: <><path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" /><path d="M4 21h16M14 12h.01" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
  wallet: <><path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v12H5a3 3 0 0 1-3-3V6" /><path d="M16 14h.01" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></>,
  trash: <><path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v6M14 11v6" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  building: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 21v-4h6v4M8 8h2M14 8h2M8 12h2M14 12h2" /></>,
  logout: <><path d="M10 17l5-5-5-5M15 12H3M15 3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
  trend: <><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  filter: <path d="M4 5h16l-6 7v5l-4 2v-7Z" />,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo ${light ? "logo-light" : ""}`}>
      <span className="logo-mark"><Icon name="building" size={22} /></span>
      <span>Kost <span>Cinta Damai</span></span>
    </div>
  );
}

function Button({ children, variant = "primary", icon, onClick, wide = false, type = "button" }: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  icon?: IconName;
  onClick?: () => void;
  wide?: boolean;
  type?: "button" | "submit";
}) {
  return <button type={type} className={`btn btn-${variant} ${wide ? "btn-wide" : ""}`} onClick={onClick}>{icon && <Icon name={icon} size={18} />}{children}</button>;
}

function Badge({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "blue" | "amber" | "gray" }) {
  return <span className={`badge badge-${tone}`}><span className="badge-dot" />{children}</span>;
}

function HomePage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main className="landing">
      <nav className="landing-nav">
        <Logo />
        <div className="nav-links"><a href="#beranda" className="active">Beranda</a><a href="#tentang">Tentang</a><a href="#kontak">Kontak</a></div>
        <Button onClick={() => navigate("login")}>Masuk ke Sistem <Icon name="arrow" size={17} /></Button>
      </nav>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Sistem manajemen kost modern</div>
          <h1>Kelola Kost Lebih <span>Mudah</span> dan Teratur</h1>
          <p>Kost Cinta Damai membantu pemilik kost mengelola kamar, penghuni, penyewaan, dan pembayaran dalam satu sistem yang praktis.</p>
          <div className="hero-actions">
            <Button onClick={() => navigate("login")}>Masuk ke Sistem <Icon name="arrow" size={18} /></Button>
            <Button variant="secondary" onClick={() => document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })}>Pelajari Selengkapnya</Button>
          </div>
          <div className="trust-row">
            {["Data terorganisir", "Pantau pembayaran", "Mudah digunakan"].map((item) => <span key={item}><i><Icon name="check" size={13} /></i>{item}</span>)}
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orb orb-one" /><div className="visual-orb orb-two" />
          <div className="building-card">
            <div className="building-roof" />
            <div className="building-body">
              <div className="building-sign"><span className="mini-mark"><Icon name="building" size={15} /></span>Kost Cinta Damai</div>
              <div className="windows">{Array.from({ length: 8 }).map((_, i) => <span key={i} className={i === 4 ? "lit" : ""} />)}</div>
              <div className="building-ground"><span className="plant">✦</span><span className="door-shape" /><span className="plant">✦</span></div>
            </div>
          </div>
          <div className="float-card float-top"><span className="float-icon blue"><Icon name="door" /></span><div><b>24 Kamar</b><small>Total unit tersedia</small></div></div>
          <div className="float-card float-bottom"><div className="avatars"><span>AR</span><span>SR</span><span>+</span></div><div><b>18 Penghuni</b><small>Sedang aktif</small></div></div>
          <div className="occupancy-card"><div><small>Tingkat hunian</small><strong>75%</strong></div><span><i /></span></div>
        </div>
      </section>

      <section className="benefits" id="tentang">
        <div className="section-heading"><span>Semua dalam satu tempat</span><h2>Pengelolaan kost jadi lebih efisien</h2><p>Fitur inti yang dirancang untuk menyederhanakan pekerjaan administrasi harian Anda.</p></div>
        <div className="benefit-grid">
          {[
            ["door", "Kelola Data Kamar", "Pantau ketersediaan, fasilitas, dan harga setiap kamar dengan mudah."],
            ["users", "Pantau Penghuni", "Simpan identitas serta riwayat penyewaan penghuni secara rapi."],
            ["wallet", "Catat Pembayaran", "Kelola pembayaran bulanan dan pantau tagihan yang belum lunas."],
          ].map(([icon, title, desc], i) => <article className="benefit-card" key={title}><span className={`benefit-icon icon-${i}`}><Icon name={icon as IconName} size={24} /></span><h3>{title}</h3><p>{desc}</p><a href="#beranda" onClick={(e) => { e.preventDefault(); navigate("login"); }}>Mulai kelola <Icon name="arrow" size={15} /></a></article>)}
        </div>
      </section>
      <footer id="kontak"><Logo /><span>Proyek UTS Pemrograman Berorientasi Objek</span><small>© 2025 Kost Cinta Damai</small></footer>
    </main>
  );
}

function LoginPage({ navigate }: { navigate: (page: Page) => void }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="login-page">
      <section className="login-art">
        <div className="login-art-top"><Logo light /><button className="back-link" onClick={() => navigate("home")}>← Kembali</button></div>
        <div className="login-message">
          <span className="login-kicker">Sistem Informasi Kostan</span>
          <h1>Pengelolaan kost menjadi lebih sederhana.</h1>
          <p>Satu ruang kerja untuk mengelola seluruh operasional Kost Cinta Damai dengan aman dan efisien.</p>
        </div>
        <div className="login-preview">
          <div className="preview-bar"><span /><span /><span /></div>
          <div className="preview-content"><div className="preview-side" /><div className="preview-main"><div className="preview-title" /><div className="preview-stats"><span /><span /><span /></div><div className="preview-chart"><i /><i /><i /><i /><i /><i /></div></div></div>
        </div>
        <div className="login-dots"><span /><span /><span /></div>
      </section>
      <section className="login-form-wrap">
        <form className="login-form" onSubmit={(event) => { event.preventDefault(); navigate("dashboard"); }}>
          <div className="mobile-logo"><Logo /></div>
          <span className="form-kicker">ADMIN PORTAL</span>
          <h2>Selamat datang kembali</h2>
          <p>Masukkan akun admin untuk melanjutkan ke dashboard.</p>
          <label>Username<div className="input-wrap"><Icon name="users" size={18} /><input defaultValue="admin.cintadamai" placeholder="Masukkan username" /></div></label>
          <label>Password<div className="input-wrap"><Icon name="door" size={18} /><input type={showPassword ? "text" : "password"} defaultValue="cintadamai2025" placeholder="Masukkan password" /><button type="button" className="input-action" onClick={() => setShowPassword(!showPassword)}><Icon name="eye" size={18} /></button></div></label>
          <div className="form-options"><label className="check-label"><input type="checkbox" defaultChecked /><span><Icon name="check" size={12} /></span>Ingat saya</label><a href="#help">Lupa password?</a></div>
          <Button type="submit" wide>Masuk ke Dashboard <Icon name="arrow" size={18} /></Button>
          <div className="secure-note"><span><Icon name="check" size={14} /></span>Data Anda dilindungi dengan sistem keamanan Kost Cinta Damai.</div>
        </form>
      </section>
    </main>
  );
}

const navItems: { page: Page; icon: IconName; label: string }[] = [
  { page: "dashboard", icon: "grid", label: "Dashboard" },
  { page: "rooms", icon: "door", label: "Manajemen Kamar" },
  { page: "residents", icon: "users", label: "Data Penghuni" },
  { page: "rentals", icon: "calendar", label: "Penyewaan" },
  { page: "payments", icon: "wallet", label: "Pembayaran" },
];

function Sidebar({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  return <aside className="sidebar">
    <Logo light />
    <span className="side-caption">MENU UTAMA</span>
    <nav>{navItems.map((item) => <button key={item.page} className={page === item.page ? "active" : ""} onClick={() => navigate(item.page)}><Icon name={item.icon} size={20} /><span>{item.label}</span>{page === item.page && <i />}</button>)}</nav>
    <div className="side-bottom">
      <div className="side-profile"><span className="avatar">AC</span><div><b>Admin Cinta Damai</b><small>Administrator</small></div><button onClick={() => navigate("home")} title="Keluar"><Icon name="logout" size={18} /></button></div>
    </div>
  </aside>;
}

function Topbar({ title }: { title: string }) {
  return <header className="topbar"><div><span>Kost Cinta Damai</span><b>/</b><strong>{title}</strong></div><div className="top-actions"><button className="notification"><Icon name="bell" size={20} /><i /></button><span className="top-divider" /><div className="top-profile"><span className="avatar">AC</span><div><b>Admin Cinta Damai</b><small>Administrator</small></div></div></div></header>;
}

function StatCard({ icon, label, value, note, color = "blue" }: { icon: IconName; label: string; value: string; note: string; color?: string }) {
  return <article className="stat-card"><div className="stat-top"><span className={`stat-icon stat-${color}`}><Icon name={icon} size={22} /></span><span className="stat-menu">•••</span></div><small>{label}</small><strong>{value}</strong><p><span><Icon name="trend" size={13} /> {note.split(" ")[0]}</span> {note.split(" ").slice(1).join(" ")}</p></article>;
}

function Dashboard() {
  return <div className="page-body">
    <PageHeading title="Dashboard" description="Pantau kondisi kost dan aktivitas terbaru hari ini." right={<div className="date-chip"><Icon name="calendar" size={17} /> Senin, 23 Juni 2025</div>} />
    <div className="stats-grid">
      <StatCard icon="building" label="Total Kamar" value="24" note="+2 bulan ini" />
      <StatCard icon="door" label="Kamar Terisi" value="18" note="+8% bulan ini" color="violet" />
      <StatCard icon="check" label="Kamar Kosong" value="6" note="25% tersedia" color="green" />
      <StatCard icon="users" label="Penghuni Aktif" value="18" note="+3 bulan ini" color="amber" />
    </div>
    <div className="dashboard-grid">
      <section className="panel payment-summary">
        <PanelTitle title="Ringkasan Pembayaran" subtitle="Pemasukan enam bulan terakhir" action="Lihat laporan" />
        <div className="chart-total"><div><small>Total diterima bulan ini</small><strong>Rp18.750.000</strong></div><Badge tone="green">+12,5%</Badge></div>
        <div className="bar-chart">{[52, 67, 60, 78, 70, 92].map((h, i) => <div key={i}><span className={i === 5 ? "current" : ""} style={{ height: `${h}%` }}><i>Rp{[12, 15, 14, 17, 16, 19][i]}jt</i></span><small>{["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"][i]}</small></div>)}</div>
      </section>
      <section className="panel occupancy">
        <PanelTitle title="Status Kamar" subtitle="Okupansi saat ini" />
        <div className="donut"><div><strong>75%</strong><small>Terisi</small></div></div>
        <div className="occupancy-legend"><div><span className="legend-blue" /><p><small>Terisi</small><b>18 kamar</b></p></div><div><span className="legend-soft" /><p><small>Kosong</small><b>6 kamar</b></p></div></div>
      </section>
    </div>
    <section className="panel activity">
      <PanelTitle title="Aktivitas Terbaru" subtitle="Pembaruan data operasional Kost Cinta Damai" action="Lihat semua" />
      <div className="activity-list">
        {[
          ["wallet", "Pembayaran diterima", "Andi Pratama · Kamar A-03", "10 menit lalu", "Lunas", "green"],
          ["users", "Penghuni baru ditambahkan", "Siti Rahma · Kamar B-02", "1 jam lalu", "Aktif", "blue"],
          ["door", "Data kamar diperbarui", "Kamar A-05 · Status kosong", "3 jam lalu", "Kosong", "green"],
          ["calendar", "Penyewaan diperpanjang", "Rudi Hartono · Kamar C-01", "Kemarin", "Aktif", "blue"],
        ].map(([icon, title, detail, time, status, tone]) => <div className="activity-row" key={title}><span className="activity-icon"><Icon name={icon as IconName} size={19} /></span><div><b>{title}</b><small>{detail}</small></div><time>{time}</time><Badge tone={tone as "green" | "blue"}>{status}</Badge></div>)}
      </div>
    </section>
  </div>;
}

function PageHeading({ title, description, right }: { title: string; description: string; right?: ReactNode }) {
  return <div className="page-heading"><div><h1>{title}</h1><p>{description}</p></div>{right}</div>;
}

function PanelTitle({ title, subtitle, action }: { title: string; subtitle?: string; action?: string }) {
  return <div className="panel-title"><div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div>{action && <button>{action} <Icon name="arrow" size={15} /></button>}</div>;
}

type TableRow = { cells: ReactNode[] };

function DataTable({ headers, rows }: { headers: string[]; rows: TableRow[] }) {
  return <div className="table-wrap"><table><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.cells.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function Actions({ onDelete }: { onDelete: () => void }) {
  return <div className="row-actions"><button title="Edit"><Icon name="edit" size={17} /></button><button className="delete" title="Hapus" onClick={onDelete}><Icon name="trash" size={17} /></button></div>;
}

function SearchToolbar({ placeholder, secondFilter = "Semua Status" }: { placeholder: string; secondFilter?: string }) {
  return <div className="toolbar"><div className="search"><Icon name="search" size={18} /><input placeholder={placeholder} /></div><select defaultValue="all"><option value="all">{secondFilter}</option><option>Aktif</option><option>Tidak Aktif</option></select><Button variant="secondary" icon="filter">Filter</Button></div>;
}

function Pagination({ label }: { label: string }) {
  return <div className="pagination"><span>{label}</span><div><button>‹</button><button className="active">1</button><button>2</button><button>3</button><button>›</button></div></div>;
}

function ManagementPage({ kind, openModal, openDelete }: { kind: "rooms" | "residents" | "rentals" | "payments"; openModal: () => void; openDelete: () => void }) {
  const configs = {
    rooms: { title: "Manajemen Kamar", desc: "Kelola data, harga sewa, dan status setiap kamar.", action: "Tambah Kamar", search: "Cari nomor atau tipe kamar..." },
    residents: { title: "Data Penghuni", desc: "Kelola identitas dan status penghuni kost.", action: "Tambah Penghuni", search: "Cari ID, nama, atau nomor telepon..." },
    rentals: { title: "Penyewaan", desc: "Kelola periode dan biaya penyewaan kamar.", action: "Tambah Penyewaan", search: "Cari ID atau nama penghuni..." },
    payments: { title: "Pembayaran", desc: "Pantau dan catat pembayaran sewa penghuni.", action: "Catat Pembayaran", search: "Cari nama atau nomor kamar..." },
  } as const;
  const config = configs[kind];
  return <div className="page-body">
    <PageHeading title={config.title} description={config.desc} right={<Button icon="plus" onClick={openModal}>{config.action}</Button>} />
    {kind === "payments" && <div className="mini-stats"><MiniStat label="Diterima bulan ini" value="Rp18.750.000" tone="blue" /><MiniStat label="Belum lunas" value="Rp3.350.000" tone="amber" /><MiniStat label="Transaksi lunas" value="15" tone="green" /><MiniStat label="Menunggu pembayaran" value="3" tone="violet" /></div>}
    {kind === "rentals" && <div className="rental-summary"><div><span><Icon name="calendar" /></span><p>Penyewaan Aktif<b>18</b></p></div><div><span><Icon name="bell" /></span><p>Akan Berakhir<b>3</b></p></div><div><span><Icon name="check" /></span><p>Selesai Bulan Ini<b>2</b></p></div></div>}
    <section className="panel data-panel">
      <SearchToolbar placeholder={config.search} secondFilter={kind === "rooms" ? "Semua Tipe Kamar" : kind === "payments" ? "Juni 2025" : "Semua Status"} />
      {kind === "rooms" && <RoomTable openDelete={openDelete} />}
      {kind === "residents" && <ResidentTable openDelete={openDelete} />}
      {kind === "rentals" && <RentalTable />}
      {kind === "payments" && <PaymentTable />}
      <Pagination label={`Menampilkan 1–5 dari ${kind === "rooms" ? "24 kamar" : kind === "residents" ? "18 penghuni" : kind === "rentals" ? "23 penyewaan" : "42 transaksi"}`} />
    </section>
  </div>;
}

function MiniStat({ label, value, tone }: { label: string; value: string; tone: string }) {
  return <div className={`mini-stat mini-${tone}`}><span><Icon name={tone === "amber" ? "bell" : tone === "green" ? "check" : "wallet"} size={19} /></span><div><small>{label}</small><b>{value}</b></div></div>;
}

function RoomTable({ openDelete }: { openDelete: () => void }) {
  const data = [
    ["A-01", "Standard", "Kasur, Lemari, Wi-Fi", "Rp850.000", "Terisi"],
    ["A-02", "Standard", "Kasur, Lemari, Wi-Fi", "Rp850.000", "Kosong"],
    ["B-01", "Deluxe", "AC, KM Dalam, Wi-Fi", "Rp1.250.000", "Terisi"],
    ["B-02", "Deluxe", "AC, KM Dalam, Wi-Fi", "Rp1.250.000", "Kosong"],
    ["C-01", "Premium", "AC, TV, KM Dalam", "Rp1.650.000", "Terisi"],
  ];
  return <DataTable headers={["Nomor", "Tipe Kamar", "Fasilitas", "Harga Sewa", "Status", "Aksi"]} rows={data.map((r) => ({ cells: [<b>{r[0]}</b>, r[1], <span className="muted">{r[2]}</span>, <b>{r[3]}</b>, <Badge tone={r[4] === "Kosong" ? "green" : "blue"}>{r[4]}</Badge>, <Actions onDelete={openDelete} />] }))} />;
}

function ResidentTable({ openDelete }: { openDelete: () => void }) {
  const data = [
    ["PGH-001", "Andi Pratama", "Bandung", "0812 3456 7890", "A-03", "Aktif"],
    ["PGH-002", "Siti Rahma", "Garut", "0813 2211 9087", "B-02", "Aktif"],
    ["PGH-003", "Rudi Hartono", "Sumedang", "0857 6690 1142", "C-01", "Aktif"],
    ["PGH-004", "Nabila Putri", "Tasikmalaya", "0821 3455 8021", "A-01", "Aktif"],
    ["PGH-005", "Dimas Saputra", "Cianjur", "0819 8872 1300", "—", "Tidak Aktif"],
  ];
  return <DataTable headers={["ID", "Nama Penghuni", "Alamat", "Nomor Telepon", "Kamar", "Status", "Aksi"]} rows={data.map((r) => ({ cells: [<span className="id-text">{r[0]}</span>, <div className="name-cell"><span>{r[1].split(" ").map(n => n[0]).slice(0, 2).join("")}</span><b>{r[1]}</b></div>, r[2], r[3], <b>{r[4]}</b>, <Badge tone={r[5] === "Aktif" ? "green" : "gray"}>{r[5]}</Badge>, <Actions onDelete={openDelete} />] }))} />;
}

function RentalTable() {
  const data = [
    ["SW-2025-001", "Andi Pratama", "A-03", "01 Jan 2025", "31 Des 2025", "Rp10.200.000", "Aktif"],
    ["SW-2025-002", "Siti Rahma", "B-02", "15 Feb 2025", "14 Feb 2026", "Rp15.000.000", "Aktif"],
    ["SW-2025-003", "Rudi Hartono", "C-01", "01 Mar 2025", "31 Agu 2025", "Rp9.900.000", "Akan Berakhir"],
    ["SW-2025-004", "Nabila Putri", "A-01", "10 Apr 2025", "09 Apr 2026", "Rp10.200.000", "Aktif"],
    ["SW-2024-018", "Dimas Saputra", "B-04", "01 Jul 2024", "30 Jun 2025", "Rp15.000.000", "Selesai"],
  ];
  return <DataTable headers={["ID Penyewaan", "Nama Penghuni", "Kamar", "Tanggal Mulai", "Tanggal Selesai", "Total Biaya", "Status"]} rows={data.map((r) => ({ cells: [<span className="id-text">{r[0]}</span>, <b>{r[1]}</b>, <span className="room-pill">{r[2]}</span>, r[3], r[4], <b>{r[5]}</b>, <Badge tone={r[6] === "Aktif" ? "green" : r[6] === "Akan Berakhir" ? "amber" : "gray"}>{r[6]}</Badge>] }))} />;
}

function PaymentTable() {
  const data = [
    ["Andi Pratama", "A-03", "Juni 2025", "Rp850.000", "03 Jun 2025", "Transfer", "Lunas"],
    ["Siti Rahma", "B-02", "Juni 2025", "Rp1.250.000", "05 Jun 2025", "Tunai", "Lunas"],
    ["Rudi Hartono", "C-01", "Juni 2025", "Rp1.650.000", "—", "—", "Belum Lunas"],
    ["Nabila Putri", "A-01", "Juni 2025", "Rp850.000", "07 Jun 2025", "Transfer", "Lunas"],
    ["Fajar Nugraha", "B-03", "Juni 2025", "Rp1.250.000", "—", "—", "Belum Lunas"],
  ];
  return <DataTable headers={["Nama Penghuni", "Kamar", "Periode", "Jumlah", "Tanggal", "Metode", "Status"]} rows={data.map((r) => ({ cells: [<b>{r[0]}</b>, <span className="room-pill">{r[1]}</span>, r[2], <b>{r[3]}</b>, r[4], r[5], <Badge tone={r[6] === "Lunas" ? "green" : "amber"}>{r[6]}</Badge>] }))} />;
}

function Modal({ type, onClose }: { type: "form" | "delete"; onClose: () => void }) {
  return <div className="modal-backdrop" onMouseDown={onClose}><div className={`modal ${type === "delete" ? "delete-modal" : ""}`} onMouseDown={(e) => e.stopPropagation()}>
    <button className="modal-close" onClick={onClose}><Icon name="close" size={20} /></button>
    {type === "delete" ? <>
      <span className="danger-icon"><Icon name="trash" size={25} /></span>
      <h2>Hapus data ini?</h2>
      <p>Data yang dihapus tidak dapat dikembalikan. Pastikan Anda telah memilih data yang benar.</p>
      <div className="modal-actions"><Button variant="secondary" onClick={onClose}>Batal</Button><Button variant="danger" onClick={onClose}>Ya, Hapus</Button></div>
    </> : <>
      <div className="modal-heading"><span className="modal-icon"><Icon name="plus" size={22} /></span><div><h2>Tambah Data Baru</h2><p>Lengkapi informasi berikut untuk menambahkan data.</p></div></div>
      <div className="form-grid">
        <label>Nama lengkap<input placeholder="Masukkan nama lengkap" /></label>
        <label>Nomor kamar<select><option>Pilih kamar</option><option>A-02</option><option>B-02</option></select></label>
        <label>Nomor telepon<input placeholder="08xx xxxx xxxx" /></label>
        <label>Status<select><option>Aktif</option><option>Tidak Aktif</option></select></label>
        <label className="full">Alamat<textarea placeholder="Masukkan alamat lengkap" /></label>
      </div>
      <div className="modal-actions"><Button variant="secondary" onClick={onClose}>Batal</Button><Button onClick={onClose}>Simpan Data</Button></div>
    </>}
  </div></div>;
}

function AdminApp({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  const [modal, setModal] = useState<"form" | "delete" | null>(null);
  const title = navItems.find((item) => item.page === page)?.label || "Dashboard";
  return <div className="admin-shell">
    <Sidebar page={page} navigate={navigate} />
    <main className="admin-main"><Topbar title={title} />{page === "dashboard" ? <Dashboard /> : <ManagementPage kind={page as "rooms" | "residents" | "rentals" | "payments"} openModal={() => setModal("form")} openDelete={() => setModal("delete")} />}</main>
    {modal && <Modal type={modal} onClose={() => setModal(null)} />}
  </div>;
}

export default function App() {
  const initialPage = useMemo<Page>(() => "home", []);
  const [page, setPage] = useState<Page>(initialPage);
  const navigate = (next: Page) => { setPage(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  if (page === "home") return <HomePage navigate={navigate} />;
  if (page === "login") return <LoginPage navigate={navigate} />;
  return <AdminApp page={page} navigate={navigate} />;
}
