function saveBiodata() {
    const biodataForm = document.getElementById('biodataForm');
    const biodata = {
        nama: biodataForm.nama.value,
        nisn: biodataForm.nisn.value,
        ttl: biodataForm.ttl.value,
        alamat: biodataForm.alamat.value,
    };
    localStorage.setItem('biodata', JSON.stringify(biodata));
    window.location.href = 'nilai.html';
}

function saveNilai() {
    const nilaiForm = document.getElementById('nilaiForm');
    const nilai = {
        bindo: nilaiForm.bindo.value,
        pkk: nilaiForm.pkk.value,
        agama: nilaiForm.agama.value,
        matematika: nilaiForm.matematika.value,
        pjok: nilaiForm.pjok.value,
        aij: nilaiForm.aij.value,
        wan: nilaiForm.wan.value,
        asj: nilaiForm.asj.value,
        binggris: nilaiForm.binggris.value,
        pkn: nilaiForm.pkn.value,
        tlj: nilaiForm.tlj.value,
        kehadiran: nilaiForm.kehadiran.value,
        tugas: nilaiForm.tugas.value,
        mid: nilaiForm.mid.value,
        semester: nilaiForm.semester.value,
    };
    localStorage.setItem('nilai', JSON.stringify(nilai));
    window.location.href = 'output.html';
}

function loadOutput() {
    const biodata = JSON.parse(localStorage.getItem('biodata'));
    const nilai = JSON.parse(localStorage.getItem('nilai'));
    if (biodata && nilai) {
        let outputHtml = `<h2>Biodata Siswa</h2>
            <p>Nama: ${biodata.nama}</p>
            <p>NISN: ${biodata.nisn}</p>
            <p>Tempat Tanggal Lahir: ${biodata.ttl}</p>
            <p>Alamat: ${biodata.alamat}</p>`;
        
        outputHtml += `<h2>Nilai Siswa</h2>
            <table>
                <tr><th>Mata Pelajaran</th><th>Nilai</th></tr>
                <tr><td>Bahasa Indonesia</td><td>${nilai.bindo}</td></tr>
                <tr><td>PKK</td><td>${nilai.pkk}</td></tr>
                <tr><td>Agama</td><td>${nilai.agama}</td></tr>
                <tr><td>Matematika</td><td>${nilai.matematika}</td></tr>
                <tr><td>PJOK</td><td>${nilai.pjok}</td></tr>
                <tr><td>AIJ</td><td>${nilai.aij}</td></tr>
                <tr><td>WAN</td><td>${nilai.wan}</td></tr>
                <tr><td>ASJ</td><td>${nilai.asj}</td></tr>
                <tr><td>Bahasa Inggris</td><td>${nilai.binggris}</td></tr>
                <tr><td>PKN</td><td>${nilai.pkn}</td></tr>
                <tr><td>TLJ</td><td>${nilai.tlj}</td></tr>
                <tr><th>Penilaian Lainnya</th><th>Nilai</th></tr>
                <tr><td>Kehadiran</td><td>${nilai.kehadiran}</td></tr>
                <tr><td>Nilai Tugas</td><td>${nilai.tugas}</td></tr>
                <tr><td>Nilai Mid Semester</td><td>${nilai.mid}</td></tr>
                <tr><td>Nilai Semester</td><td>${nilai.semester}</td></tr>
            </table>`;

        document.getElementById('output').innerHTML = outputHtml;
    } else {
        document.getElementById('output').innerHTML = '<p>Data tidak ditemukan.</p>';
    }
}

if (document.body.contains(document.getElementById('output'))) {
    loadOutput();
}
