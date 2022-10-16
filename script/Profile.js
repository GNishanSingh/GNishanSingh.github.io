$(function () {
    $('body').terminal({
        whoami: function () {
            this.echo(`
            <div class="grid-container">
                <div class="grid-item" id='basicdetais'></div>
                <div class="grid-item" id='skillset'></div>
            </div>
            `, { raw: true })
            document.getElementById("basicdetais").innerHTML = `
            <p style="color:green;font-size:14px;">Details about me</p>
            <table>
            <tr>
                <td style="border:none;">Name</td>
                <td style="border:none;">:</td>
                <td style="border:none;">Gurmukhnishan Singh</td>
            </tr>
            <tr>
                <td style="border:none;">Current Designation</td>
                <td style="border:none;">:</td>
                <td style="border:none;">Technical Lead (Detection Engineering)</td>
            </tr>
            <tr>
                <td style="border:none;">Current Employer</td>
                <td style="border:none;">:</td>
                <td style="border:none;">Securonix India PVT. LTD.</td>
            </tr>
            <tr>
                <td style="border:none;">Total Experience</td>
                <td style="border:none;">:</td>
                <td style="border:none;">9 years and 3 month</td>
            </tr>
            <tr>
                <td style="border:none;">Previous Employers</td>
                <td style="border:none;">:</td>
                <td style="border:none;"></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;">Netsurion Technologies PVT. LTD.] (6 years and 6 months) (June 2015 - November 2021)</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;">Axon Network Solution PVT. LTD.] (1 year and 1 month) (December 2013 - June 2015)</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;">IT Support Desk Limited.] (6 months) (june 2013 - november 2013)</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;">IT Support Desk Limited.] (6 months) (june 2013 - november 2013)</td>
            </tr>
            <tr>
                <td style="border:none;">Education</td>
                <td style="border:none;">:</td>
                <td style="border:none;">Bachelor of Engineering (2008-2012)</td>
            </tr>
            <tr>
                <td style="border:none;">Certification</td>
                <td style="border:none;">:</td>
                <td style="border:none;"></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://mad-certified.mitre-engenuity.org/02aa55f6-287a-4299-8d47-6cd2c2c2bfae" target="_blank">ATT&CK Cyber Threat Intelligence Certification</a></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://mad-certified.mitre-engenuity.org/6245378c-8b5d-4888-9246-e0b1f801590d" target="_blank">ATT&CK Security Operations Center Assessment Certification</a></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://securonixacademy.northpass.com/courses/fefba1a5-03d0-425e-a77c-c4b9f8f4e26a/certificate" target="_blank">Certified SNYPR Content Developer</a></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://securonixacademy.northpass.com/courses/51d09917-09e5-41ef-8bc1-97a24ff78f52/certificate" target="_blank">Certified SNYPR Data Integrator</a></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://securonixacademy.northpass.com/courses/dcd6cbc2-727b-47b0-b585-3ad3fffc2f74/certificate" target="_blank">Certified SNYPR Security Analyst</a></td>
            </tr>
            <tr>
                <td style="border:none;">Project</td>
                <td style="border:none;">:</td>
                <td style="border:none;"></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://github.com/GNishanSingh/Optm_ParserEngine" target="_blank">Optimized Parser Engine</a></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://serverlessrepo.aws.amazon.com/applications/us-east-1/655631112574/ETS-AWS-Logforwarder" target="_blank">AWS Connector with SIEM</a></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://www.netsurion.com/knowledge-packs/microsoft-azure" target="_blank">Azure Connector with SIEM</a></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://www.netsurion.com/capabilities/mitre-attack" target="_blank">MITRE ATT&CK Integration with EventTracker</a></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"><a href="https://www.netsurion.com/eventtracker-support/software-updates/v9x/et93u21-056" target="_blank">Vulnerability Management Integration with EventTracker</a></td>
            </tr>
            </table>
            `;
            am5.ready(function() {
            var root = am5.Root.new("skillset");
            root.setThemes([
            am5themes_Animated.new(root)
            ]);
            var chart = root.container.children.push(am5radar.RadarChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none",
            startAngle: -84,
            endAngle: 264,
            innerRadius: am5.percent(40)
            }));
            // const cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
            // behavior: "zoomX"
            // }));
            // cursor.lineY.set("forceHidden", true);
            // chart.set("scrollbarX", am5.Scrollbar.new(root, {
            // orientation: "horizontal",
            // exportable: false
            // }));

            var xRenderer = am5radar.AxisRendererCircular.new(root, {
            minGridDistance: 30
            });

            xRenderer.grid.template.set("forceHidden", true);

            var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0,
            categoryField: "category",
            renderer: xRenderer
            }));

            var yRenderer = am5radar.AxisRendererRadial.new(root, {});
            yRenderer.labels.template.set("centerX", am5.p50);

            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            min: 0,
            renderer: yRenderer
            }));
            var series = chart.series.push(am5radar.RadarColumnSeries.new(root, {
            name: "Series 1",
            sequencedInterpolation: true,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "category"
            }));

            series.columns.template.setAll({
            cornerRadius: 5,
            tooltipText: "{categoryX}: {valueY}"
            });

            series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
            });

            series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
            });

            var data = [
                {category: 'Python', value:7},
                {category: 'Powershell',value:8},
                {category: 'Cybersecurity',value:8},
                {category: 'HTML/Javascript', value:7},
                {category: 'Regular Expressions',value:9},
                {category: 'EventTracker', value:6},
                {category: 'SNYPR', value:1},
                {category: 'Log Normalization',value:9},
                {category: 'Security Content Development', value:8},
                {category: 'Offensive Security', value:2}
            ];

            xAxis.data.setAll(data);
            series.data.setAll(data);

            series.appear(1000);
            chart.appear(1000, 100);

            });
        },
        experience: function () {
            this.echo(`
<div class="column">
    <p></p>
    <p></p>
    <div class="row" id="timeline"></div>
    <div class="row" id="tooltip"></div>
    <div class="row" id="experience"></div>
</div>
            
            `, { raw: true })
            var width = 1000;
            var testData = [
                {
                    label: "Securonix India PVT LTD", times: [
                        { "starting_time": 1637419320000, "ending_time": 1665326520000 }]
                },
                {
                    label: "Netsurion Technologies PVT LTD", times: [
                        { "starting_time": 1433947320000, "ending_time": 1637419320000 }
                    ]
                },
                {
                    label: "Axon Network Solution PVT LTD", times: [
                        { "starting_time": 1384094520000, "ending_time": 1433947320000 }]
                },
                {
                    label: "IT Support Desk Limited", times: [
                        { "starting_time": 1370875320000, "ending_time": 1384094520000 }]
                }
            ];
            var chart = d3.timeline().showAxisTop().stack();
            chart.tickFormat({
                format: d3.time.format("%Y"),
                tickSize: 13
            })
            chart.margin({ left: 150, right: 30, top: 0, bottom: 0 })
            chart.beginning(1370875320000)
            chart.ending(1665326520000)
            chart.mouseover(function (d, i, datum) {
                document.getElementById("tooltip").innerHTML = ""
                document.getElementById("tooltip").innerHTML = "Please click on it for getting more details about my experience in '" + datum['label'] + "'"
            });
            chart.mouseout(function (d, i, datum) {
                document.getElementById("tooltip").innerHTML = ""
            }
            );
            chart.click(function (d, i, datum) {
                console.log(datum['label'])
                document.getElementById("experience").innerHTML = ""
                if (datum['label'] == "Securonix India PVT LTD") {
                    document.getElementById("experience").innerHTML = `
<table>
<tr>
    <td>Total Experience </td>
    <td>9 Year and 4 Months</td>
</tr>
<tr>
    <td>Employer </td>
    <td>Securonix India PVT. LTD. </td>
</tr>
</table>
                            `
                } else if (datum['label'] == "Netsurion Technologies PVT LTD") {
                    document.getElementById("experience").innerHTML = `
<table>
<tr>
    <td>Total Experience </td>
    <td>9 Year and 4 Months</td>
</tr>
<tr>
    <td>Employer </td>
    <td>Netsurion Technologies PVT. LTD. </td>
</tr>
</table>`
                } else if (datum['label'] == "Axon Network Solution PVT LTD") {
                    document.getElementById("experience").innerHTML = `
<table>
<tr>
    <td>Total Experience </td>
    <td>9 Year and 4 Months</td>
</tr>
<tr>
    <td>Employer </td>
    <td>Axon Network Solution PVT. LTD. </td>
</tr>
</table>`
                } else {
                    document.getElementById("experience").innerHTML = `
<table>
<tr>
    <td>Total Experience </td>
    <td>9 Year and 4 Months</td>
</tr>
<tr>
    <td>Employer </td>
    <td>IT Support Desk PVT. LTD. </td>
</tr>
</table>`
                }
            });
            var svg = d3.select("#timeline").append("svg").attr("width", width)
                .datum(testData).call(chart);
        },
        help: function () {
            this.echo(`
Use following command for getting details about me:
---------------------------------------------------
| [[b;#0000FF;]Command]   |          [[b;#0000FF;]Description]                |
---------------------------------------------------
| [[b;#0000FF;]whoami]     | To read something about me         |
| [[b;#0000FF;]experience] | To Read about my work experience   |
| [[b;#0000FF;]projects]   | To Read about project i have done  |
| [[b;#0000FF;]help]       | To get command helps               |
---------------------------------------------------
            `)
        }
    }, {
        greetings:
            `
  ▄▄ • ▄• ▄▌▄▄▄  • ▌ ▄ ·. ▄• ▄▌▄ •▄  ▄ .▄ ▐ ▄ ▪  .▄▄ ·  ▄ .▄ ▄▄▄·  ▐ ▄     .▄▄ · ▪   ▐ ▄  ▄▄ •  ▄ .▄
 ▐█ ▀ ▪█▪██▌▀▄ █··██ ▐███▪█▪██▌█▌▄▌▪██▪▐█•█▌▐███ ▐█ ▀. ██▪▐█▐█ ▀█ •█▌▐█    ▐█ ▀. ██ •█▌▐█▐█ ▀ ▪██▪▐█
 ▄█ ▀█▄█▌▐█▌▐▀▀▄ ▐█ ▌▐▌▐█·█▌▐█▌▐▀▀▄·██▀▐█▐█▐▐▌▐█·▄▀▀▀█▄██▀▐█▄█▀▀█ ▐█▐▐▌    ▄▀▀▀█▄▐█·▐█▐▐▌▄█ ▀█▄██▀▐█
 ▐█▄▪▐█▐█▄█▌▐█•█▌██ ██▌▐█▌▐█▄█▌▐█.█▌██▌▐▀██▐█▌▐█▌▐█▄▪▐███▌▐▀▐█ ▪▐▌██▐█▌    ▐█▄▪▐█▐█▌██▐█▌▐█▄▪▐███▌▐▀
 ·▀▀▀▀  ▀▀▀ .▀  ▀▀▀  █▪▀▀▀ ▀▀▀ ·▀  ▀▀▀▀ ·▀▀ █▪▀▀▀ ▀▀▀▀ ▀▀▀ · ▀  ▀ ▀▀ █▪     ▀▀▀▀ ▀▀▀▀▀ █▪·▀▀▀▀ ▀▀▀ ·
 [[!;;;;https://github.com/GNishanSingh]GitHub] | [[!;;;;https://twitter.com/g_nishan_singh]Twitter] | [[!;;;;https://www.linkedin.com/in/gurmukhnishan-singh/]LinkedIn]
 ---------------------------

Use following command for getting details about me:
---------------------------------------------------
| [[b;#0000FF;]Command]   |          [[b;#0000FF;]Description]                |
---------------------------------------------------
| [[b;#0000FF;]whoami]     | To read something about me         |
| [[b;#0000FF;]experience] | To Read about my work experience   |
| [[b;#0000FF;]projects]   | To Read about project i have done  |
| [[b;#0000FF;]help]       | To get command helps               |
---------------------------------------------------
`,
        prompt: '[[;red;]g_nishan_singh] >'
    });
});