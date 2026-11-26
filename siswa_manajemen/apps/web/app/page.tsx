const siswa = [
  { nis: "1001", nama: "Andi Saputra", kelas: "X PPLG 1", jk: "Laki-laki" },
  { nis: "1002", nama: "Siti Amelia", kelas: "X PPLG 1", jk: "Perempuan" },
  { nis: "1003", nama: "Budi Santoso", kelas: "XI PPLG 2", jk: "Laki-laki" },
  { nis: "1004", nama: "Dewi Lestari", kelas: "XI PPLG 2", jk: "Perempuan" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 rounded-2xl bg-blue-700 p-7 text-white shadow">
          <p className="text-sm text-blue-100">SISTEM INFORMASI SEKOLAH</p>
          <h1 className="mt-2 text-3xl font-bold">
            Manajemen Siswa
          </h1>
          <p className="mt-2 text-blue-100">
            Dashboard pengelolaan data siswa sekolah
          </p>
        </header>

        <section className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total Siswa</p>
            <h2 className="mt-2 text-3xl font-bold text-blue-700">4</h2>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total Kelas</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">2</h2>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Status Sistem</p>
            <h2 className="mt-2 text-xl font-bold text-green-600">Aktif</h2>
          </div>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold">Data Siswa</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-blue-50 text-blue-800">
                <tr>
                  <th className="p-3">No</th>
                  <th className="p-3">NIS</th>
                  <th className="p-3">Nama Siswa</th>
                  <th className="p-3">Kelas</th>
                  <th className="p-3">Jenis Kelamin</th>
                </tr>
              </thead>
              <tbody>
                {siswa.map((item, index) => (
                  <tr key={item.nis} className="border-b">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{item.nis}</td>
                    <td className="p-3 font-medium">{item.nama}</td>
                    <td className="p-3">{item.kelas}</td>
                    <td className="p-3">{item.jk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500">
          © 2026 Sistem Informasi Manajemen Siswa
        </footer>
      </div>
    </main>
  );
}