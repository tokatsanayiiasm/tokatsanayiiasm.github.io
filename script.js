function tabloyuGoster() {
    const tabloDiv = document.getElementById("tablo");
    const tabloHTML = `
        <table>
            <thead>
                <tr>
                    <th>ÇALIŞMA SAATLERİ</th>
                    <th>PAZARTESİ</th>
                    <th>SALI</th>
                    <th>ÇARŞAMBA</th>
                    <th>PERŞEMBE</th>
                    <th>CUMA</th>
                    <th>AİLE HEKİMİNİN HAFTALIK ÇALIŞMA SAATLERİ TOPLAMI</th>
                    <th>ASM NİN HAFTALIK TOPLAM HİZMET VERME SÜRESİ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>UZM.DR GÖKHAN YILMAZ</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>10:00-13:00 14:00-19:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>TOPLAM 40 SAAT</td>
                    <td></td>
                </tr>
                <tr>
                    <td>DR.NARGİZA GÜLÜNAY</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>TOPLAM 40 SAAT</td>
                    <td>ASM TOPLAM 49 SAAT</td>
                </tr>
                <tr>
                    <td>DR.FATİH ALBAYRAK</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>08:00-12:00 13:00-17:00</td>
                    <td>TOPLAM 40 SAAT</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    `;
    tabloDiv.innerHTML = tabloHTML;
}