let rtpp1=
document.getElementById("rtpp1");
let rtpp2=
document.getElementById("rtpp2");
let chittoor1=
document.getElementById("chittoor1");
let chittoor2=
document.getElementById("chittoor2");
let import400=
document.getElementById("import400");
let importict=
document.getElementById("importict");
let totalImport=
document.getElementById("totalImport");
function calculateImport(){
    let value1= Number(rtpp1.value);
    let value2= Number(rtpp2.value);
    let value3= Number(chittoor1.value);
    let value4= Number(chittoor2.value);
    let value5= Number(import400.value);
    let value6= Number(importict.value);
    import400.value=(value1+value2+value3+value4).toFixed(3);
    calculatetotalimport();
}
function calculatetotalimport(){
    let value1=Number(import400.value);
    let value2=Number(importict.value);
    totalImport.value=(value1+value2).toFixed(3);
}
rtpp1.addEventListener("input", calculateImport);
rtpp2.addEventListener("input",calculateImport);
chittoor1.addEventListener("input",calculateImport);
chittoor2.addEventListener("input",calculateImport);
import400.addEventListener("input",calculatetotalimport);
importict.addEventListener("input",calculatetotalimport);
let rtpp1export=
document.getElementById("rtpp1export");
let rtpp2export=
document.getElementById("rtpp2export");
let chittoor1export=
document.getElementById("chittoor1export");
let chittoor2export=
document.getElementById("chittoor2export");
let exort400=
document.getElementById("export400");
let exportict=
document.getElementById("exportict");
let totalexport=
document.getElementById("totalexport");
function calculateexport400(){
    let value1= Number(rtpp1export.value);
    let value2= Number(rtpp2export.value);
    let value3= Number(chittoor1export.value);
    let value4= Number(chittoor2export.value);
    export400.value=(value1+value2+value3+value4).toFixed(3);
    calculatetotalexport();
}
rtpp1export.addEventListener("input", calculateexport400);
rtpp2export.addEventListener("input",calculateexport400);
chittoor1export.addEventListener("input",calculateexport400);
chittoor2export.addEventListener("input",calculateexport400);
function calculatetotalexport(){
    let value1= Number(export400.value);
    let value2= Number(exportict.value);
    totalexport.value=(value1+value2).toFixed(3);
}
export400.addEventListener("input",calculatetotalexport);
exportict.addEventListener("input",calculatetotalexport);
let mdict1=
document.getElementById("mdict1");
let mdict2=
document.getElementById("mdict2");
let mdict=
document.getElementById("mdict");
function calculatemdict(){
    let value1=Number(mdict1.value);
    let value2=Number(mdict2.value);
    mdict.value=value1+value2;
}
mdict1.addEventListener("input",calculatemdict);
mdict2.addEventListener("input",calculatemdict);
let totalgeneration=
document.getElementById("totalgeneration");
function calculategeneration(){
    let value1=Number(rtpp1.value);
    let value2=Number(rtpp2.value);
    totalgeneration.value=value1+value2;
}
let busreactor=
document.getElementById("busreactor");
rtpp1.addEventListener("input",calculategeneration);
rtpp2.addEventListener("input",calculategeneration);
calculategeneration();
let interruptions=document.getElementById("Interruptions");
let reportName=document.getElementById("reportName");
function formatReportTime(time){
    if (time==="00:00"){ return "24:00";}
    return time;
}
let generateReport=
document.getElementById("generateReport");
generateReport.addEventListener("click",generateReportFunction);
function generateReportFunction(){
    function formatLine(name,value,unit="MU"){
        const namePart=name.padEnd(20," ");
        const valuePart=Number(value).toFixed(3).padStart(6," ");
        return namePart + " = " +valuePart + " " + unit;
    }
let report="*Good Morning Sir.*\n";
let reportDate=new Date();
reportDate=
String(reportDate.getDate()).padStart(2,"0")+"/" +String(reportDate.getMonth()+1).padStart(2,"0")+"/" +reportDate.getFullYear();
report +="\n*400KV SS Kalikiri Consumption Particulars on "   +reportDate +":*\n\n";
report+= "\n*1. IMPORT*\n";
report += "\n" + formatLine("RTPP-1", rtpp1.value);
report += "\n" + formatLine("RTPP-2", rtpp2.value);
report += "\n" + formatLine("Chittoor-1", chittoor1.value);
report += "\n" + formatLine("Chittoor-2", chittoor2.value);
report += "\n" + formatLine("400KV Import", import400.value);
report += "\n" + formatLine("ICTs Import", importict.value);
report += "\n" + formatLine("TOTAL IMPORT", totalImport.value);
report+="\n\n*2. EXPORT*\n";
report +="\nRTPP-1="+Number(rtpp1export.value).toFixed(3)+"MU";
report +="\nRTPP-2="+Number(rtpp2export.value).toFixed(3)+"MU";
report +="\nChittoor-1="+Number(chittoor1export.value).toFixed(3)+"MU";
report +="\nChittoor-2="+Number(chittoor1export.value).toFixed(3)+"MU";
report +="\n400KV Export="+Number(export400.value).toFixed(3)+"MU";
report +="\nICTs Export="+Number(exportict.value).toFixed(3)+"MU";
report +="\nTOTAL EXPORT="+Number(totalexport.value).toFixed(3)+"MU";
report +="\n\n*3. MD on ICTs* = "+Number(mdict.value).toFixed(2)+" MW  @"+formatReportTime(mdictime.value)+" Hrs.\n";
report +="\n 315 MVA ICT-1= "+Number(mdict1.value).toFixed(2)+ "MW.";
report +="\n 315 MVA ICT-2= "+Number(mdict2.value).toFixed(2)+ "MW.";
report +="\n\n*4. Total Generation Units*     = "+Number(totalgeneration.value).toFixed(3)+ " MU\n";
report+="\n\n*5. 400 KV Bus Vlotages:*\n"
report +="\n Maximum = "+Number(maxvoltage.value).toFixed(2)+" KV @"+formatReportTime(maxvoltagetime.value)+" Hrs.";
report +="\n Minimum = "+Number(minvoltage.value).toFixed(2)+" KV @"+formatReportTime(minvoltagetime.value)+" Hrs.";
report +="\n\n*6. 400KV Bus Reactor* : "+busreactor.value+"\n";
report +="\n\n*7. Interruptions* : "+ interruptions.value+"\n";
report+="\n "+reportName.value;
report+="\n Deputy Executive Engineer";
report+="\n 400KV SS Kalikiri";
window.lastReport=report;
let reportWindow = window.open("", "_blank", "width=900,height=900");
reportWindow.document.write(`
<html>
<head>
<title>400 KV SS Kalikiri Consumption Report</title>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 40px;
    font-size: 16px;
    white-space: pre-wrap;
}

.report {
    width: 800px;
    margin: auto;
    font-family: "Courier New",monospace;
    White-space: pre;
}

.title {
    color: blue;
    font-weight: bold;
    font-size: 20px;
}

.section {
    color: purple;
    font-weight: bold;
    font-size: 18px;
    margin-top:18px;
    margin-bottom:18px;
    text-decoration: underline;
}
.special-row{
margin-top:0;
}

.row {
    display: grid;
    grid-template-columns: 190px 25px 250px 180px;
    margin: 5px 0;
    align-item:start;
}

.name {
    color: #333;
}

.value {
    color: green;
    font-weight: bold;
}

.total {
    color: red;
    font-weight: bold;
}
</style>
</head>

<body>

<div class="report">

<b>Good morning sir.</b>

<p class="title">
400 KV SS KALIKIRI consumption particulars on ${reportDate} :
</p>

<div class="section">(1) IMPORT</div>

<div class="row">
<span class="name">RTPP-1</span><span>=</span>
<span class="value">${rtpp1.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">RTPP-2</span><span>=</span>
<span class="value">${rtpp2.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">Chittoor-1</span><span>=</span>
<span class="value">${chittoor1.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">Chittoor-2</span><span>=</span>
<span class="value">${chittoor2.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">400KV Import</span><span>=</span>
<span class="value">${import400.value}</span><span>MU</span>
</div>

<br>

<div class="row">
<span class="name">ICTs Import</span><span>=</span>
<span class="value">${importict.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">TOTAL IMPORT</span><span>=</span>
<span class="total">${totalImport.value}</span><span>MU</span>
</div>


<div class="section">(2) EXPORT</div>

<div class="row">
<span class="name">RTPP-1</span><span>=</span>
<span class="value">${rtpp1export.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">RTPP-2</span><span>=</span>
<span class="value">${rtpp2export.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">Chittoor-1</span><span>=</span>
<span class="value">${chittoor1export.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">Chittoor-2</span><span>=</span>
<span class="value">${chittoor2export.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">400KV Export</span><span>=</span>
<span class="value">${export400.value}</span><span>MU</span>
</div>

<br>

<div class="row">
<span class="name">ICTs Export</span><span>=</span>
<span class="value">${exportict.value}</span><span>MU</span>
</div>

<div class="row">
<span class="name">TOTAL EXPORT</span><span>=</span>
<span class="total">${totalexport.value}</span><span>MU</span>
</div>


<div class="section">(3) MD on ICTs</div>

<div class="row">
<span class="name">MD on ICTs</span><span>=</span>
<span class="value">${mdict.value}</span><span>MW @ ${formatReportTime(mdictime.value)} Hrs.</span>
</div>

<div class="row">
<span class="name">315MVA ICT-1</span><span>=</span>
<span class="value">${mdict1.value}</span><span>MW</span>
</div>

<div class="row">
<span class="name">315MVA ICT-2</span><span>=</span>
<span class="value">${mdict2.value}</span><span>MW</span>
</div>


<div class="section">(4) Total generating units</div>

<div class="row">
<span class="name">Total generating units</span><span>=</span>
<span class="value">${Number(totalgeneration.value).toFixed(3)}</span><span>MU</span>
</div>


<div class="section">(5) 400KV Bus voltages</div>

<div class="row">
<span class="name">Maximum</span><span>=</span>
<span class="value">${maxvoltage.value}</span><span>KV @ ${formatReportTime(maxvoltagetime.value)} Hrs.</span>
</div>

<div class="row">
<span class="name">Minimum</span><span>=</span>
<span class="value">${minvoltage.value}</span><span>KV @ ${formatReportTime(minvoltagetime.value)} Hrs.</span>
</div>


<div class="row" style="margin-top:18px;margin-bottom:18px;">
<span style="font-weight:bold;text-decoration:underline;color:#5b2a83;
font-size:18px;white-space:nowrap;">(6) 400KV Bus Reactor</span><span>=</span>
<span class="value">${busreactor.value}</span><span></span>
</div>

<div class="row" style="margin-top:18px;margin-bottom:18px;">
<span style="font-weight:bold;text-decoration:underline;color:#5b2a83;
font-size:18px;white-space:nowrap;">(7) Interruptions </span><span>=</span>
<span class="value">${interruptions.value}</span><span></span>
</div>


<br>

<br>

<div style="margin-top:30px auto 0;text-align:center;color:#4b2a73;
font-weight:bold;line-height:1.6;width:400px;">
${reportName.value}<br> Deputy Executive Engineer<br>400KV SS Kalikiri.
</div>

</body>
</html>
`);

reportWindow.document.close();
}
function updateDateTime(){
    let now=new Date();
    let year=now.getFullYear();
    let month=now.getMonth();
    let day=now.getDate();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let formattedDate=String(day).padStart(2,"0")+"/"+String(month+1).padStart(2,"0")+"/"+year;
    let ampm=hours>=12 ? "PM" :"AM";
    let displayHours=hours%12;
    displayHours=displayHours===0 ? 12:displayHours;
    let formattedTime=displayHours+":"+String(minutes).padStart(2,"0")
    +":"+String(seconds).padStart(2,"0")+" "+ampm;
    document.getElementById("dateTime").innerText=
    "Date:" +formattedDate +"  |  Time:" + formattedTime;
}
updateDateTime();
setInterval(updateDateTime,1000);
let status=document.getElementById("status");
let changeStatus=document.getElementById("changeStatus");
changeStatus.onclick=function(){
    if (status.innerText==="Status: In Service"){
        status.innerText="Status : Out of Service";
        status.style.color="red";
        changeStatus.innerText="Restore Service";
    }
    else{
        status.innerText="Status: In Service";
        status.style.color="green";
        changeStatus.innerText="Take Out of Service";
    } 
};
interruptions.addEventListener("input",function(){
    this.style.height="auto";
    this.style.height=this.scrollHeight+"px";
});
const shareWhatsApp = document.getElementById("shareWhatsApp");

shareWhatsApp.addEventListener("click", function () {
    if (!window.lastReport) {
        alert("Please Generate Report first.");
        return;
    }

function whatsappFormat(report) {

    function line(name, value) {
        const valuePart = Number(value).toFixed(3).padStart(6, " ");
        return name.padEnd(14, " ") + " = " + valuePart + " MU";
    }

    function blankLine(name) {
        return name.padEnd(14, " ") + " =       MU";
    }

    return report
        .replace(/^\s*\(1\)IMPORT/m,"(1) IMPORT")

        // IMPORT
        .replace(/RTPP-1\s*=\s*([0-9.]+)\s*MU/g,
            (_, value) => line("RTPP-1", value))

        .replace(/RTPP-2\s*=\s*([0-9.]+)\s*MU/g,
            (_, value) => line("RTPP-2", value))

        .replace(/Chittoor-1\s*=\s*([0-9.]+)\s*MU/g,
            (_, value) => line("Chittoor-1", value))

        .replace(/Chittoor-2\s*=\s*([0-9.]+)\s*MU/g,
            (_, value) => line("Chittoor-2", value))

        .replace(/400KV Import\s*=\s*([0-9.]+)\s*MU/g,
            (_, value) => line("400KV Import", value))

        .replace(/ICTs Import\s*=\s*([0-9.]+)\s*MU/g,
            (_, value) => line("ICTs Import", value))

        .replace(/TOTAL IMPORT\s*=\s*([0-9.]+)\s*MU/g,
            (_, value) => line("TOTAL IMPORT", value))

        // EXPORT
        .replace(/RTPP-1\s*=\s*MU/g,
            () => blankLine("RTPP-1"))

        .replace(/RTPP-2\s*=\s*MU/g,
            () => blankLine("RTPP-2"))

        .replace(/Chittoor-1\s*=\s*MU/g,
            () => blankLine("Chittoor-1"))

        .replace(/Chittoor-2\s*=\s*MU/g,
            () => blankLine("Chittoor-2"))
        
        .replace(/400KV Export\s*=\s*([0-9.]+)\s*MU/g,
        (_, value) => line("400KV Export", value))

        .replace(/ICTs Export\s*=\s*([0-9.]+)\s*MU/g,
        (_, value) => line("ICTs Export", value))

        .replace(/TOTAL EXPORT\s*=\s*([0-9.]+)\s*MU/g,
        (_, value) => line("TOTAL EXPORT", value))

        .replace(/MD on ICTs\s*=\s*([0-9.]+)MW\s*@\s*([0-9]+):([0-9]+)Hrs\./g,
(_, value, hour, minute) => `MD on ICTs = ${value} MW @ ${hour}:${minute} Hrs.`)

.replace(/315 MVA ICT-1\s*=\s*([0-9.]+)\s*MW\./g,
    (_, value) => `315 MVA ICT-1 = ${value} MW.`)

.replace(/315 MVA ICT-2\s*=\s*([0-9.]+)\s*MW\./g,
    (_, value) => `315 MVA ICT-2 = ${value} MW.`)

.replace(/Total Generation Units\s*=\s*([0-9.]+)\s*MU/g,
    (_, value) => `Total Generation Units = ${value} MU`)

.replace(/Maximum\s*=\s*([0-9.]+)\s*KV\s*@\s*([0-9]+):([0-9]+)\s*Hrs\./g,
    (_, value, hour, minute) =>` Maximum = ${value} KV @ ${hour}:${minute} Hrs.`)

.replace(/Minimum\s*=\s*([0-9.]+)\s*KV\s*@\s*([0-9]+):([0-9]+)\s*Hrs\./g,
    (_, value, hour, minute) => `Minimum = ${value} KV @ ${hour}:${minute} Hrs.`)

.replace(/400KV Bus Reactor\s*=\s*/g,
    "400KV Bus Reactor = ")

.replace(/Interruptions\s*=\s*/g,
    "Interruptions = ");
}

const whatsappText = "```" + whatsappFormat(window.lastReport).replace(/\*/g, "").replace(/\n@/g, " @") + "```";

const whatsappUrl =
    "https://wa.me/?text=" + encodeURIComponent(whatsappText);

window.open(whatsappUrl, "_blank");

});


