$(function () {
    $('body').terminal({
        whoami: function () {
            document.getElementById("clicksound").play();
            if (document.getElementById('details')) {
                document.getElementById('details').remove()
            }
            this.echo(`
            <div class="grid-container" id='details'>
                <div class="grid-item" id='basicdetais'></div>
                <div class="grid-item" id='skillset'><p style="color:green;font-size:14px;">Skill Set</p></div>
            </div>
            `, { raw: true })
            document.getElementById("basicdetais").innerHTML = `
            <table>
            <tr>
                <td style="border:none;"><i class="fa-solid fa-user" style="font-size:10px;"></i></td> 
                <td style="border:none;color:cyan;padding-left:10px;">Name</td>
                <td style="border:none;">:</td>
                <td style="border:none;padding-left:10px;">Gurmukhnishan Singh</td>
            </tr>
            <tr>
                <td style="border:none;"><i class="fa-solid fa-award" style="font-size:10px;"></i></td>
                <td style="border:none;color:cyan;padding-left:10px;">Current Designation</td>
                <td style="border:none;">:</td>
                <td style="border:none;padding-left:10px;">Technical Lead (Detection Engineering)</td>
            </tr>
            <tr>
                <td style="border:none;"><i class="fa-solid fa-building"></i></td>
                <td style="border:none;color:cyan;padding-left:10px;">Current Employer</td>
                <td style="border:none;">:</td>
                <td style="border:none;padding-left:10px;">Securonix India PVT. LTD.</td>
            </tr>
            <tr>
                <td style="border:none;"><i class="fa-solid fa-timeline"></i></td>
                <td style="border:none;color:cyan;padding-left:10px;">Total Experience</td>
                <td style="border:none;">:</td>
                <td style="border:none;padding-left:10px;">9 years and 3 month</td>
            </tr>
            <tr>
                <td style="border:none;"><i class="fa-solid fa-building"></i></td>
                <td style="border:none;color:cyan;padding-left:10px;">Previous Employers</td>
                <td style="border:none;">:</td>
                <td style="border:none;"></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li>Netsurion Technologies PVT. LTD. (6 years and 6 months) (June 2015 - November 2021)</li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li>Axon Network Solution PVT. LTD. (1 year and 1 month) (December 2013 - June 2015)</li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li>IT Support Desk Limited. (6 months) (june 2013 - november 2013)</li></td>
            </tr>
            <tr>
                <td style="border:none;"><i class="fa-solid fa-user-graduate"></i></td>
                <td style="border:none;color:cyan;padding-left:10px;">Education</td>
                <td style="border:none;">:</td>
                <td style="border:none;padding-left:10px;">Bachelor of Engineering (2008-2012)</td>
            </tr>
            <tr>
                <td style="border:none;"><i class="fa-solid fa-certificate"></i></td>
                <td style="border:none;color:cyan;padding-left:10px;">Certification</td>
                <td style="border:none;">:</td>
                <td style="border:none;"></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://mad-certified.mitre-engenuity.org/02aa55f6-287a-4299-8d47-6cd2c2c2bfae" target="_blank">ATT&CK Cyber Threat Intelligence Certification</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://mad-certified.mitre-engenuity.org/6245378c-8b5d-4888-9246-e0b1f801590d" target="_blank">ATT&CK Security Operations Center Assessment Certification</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://securonixacademy.northpass.com/courses/fefba1a5-03d0-425e-a77c-c4b9f8f4e26a/certificate" target="_blank">Certified SNYPR Content Developer</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://securonixacademy.northpass.com/courses/51d09917-09e5-41ef-8bc1-97a24ff78f52/certificate" target="_blank">Certified SNYPR Data Integrator</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://securonixacademy.northpass.com/courses/dcd6cbc2-727b-47b0-b585-3ad3fffc2f74/certificate" target="_blank">Certified SNYPR Security Analyst</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"><i class="fa-solid fa-diagram-project"></i></td>
                <td style="border:none;color:cyan;padding-left:10px;">Project</td>
                <td style="border:none;">:</td>
                <td style="border:none;"></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://github.com/GNishanSingh/Optm_ParserEngine" target="_blank">Optimized Parser Engine</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://serverlessrepo.aws.amazon.com/applications/us-east-1/655631112574/ETS-AWS-Logforwarder" target="_blank">AWS Connector for SIEM</a></li</td>
            </tr>
            <tr>
               <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://www.netsurion.com/knowledge-packs/microsoft-azure" target="_blank">Azure Connector for SIEM</a></li</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://www.netsurion.com/capabilities/mitre-attack" target="_blank">MITRE ATT&CK Integration with EventTracker</a></li</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://www.netsurion.com/eventtracker-support/software-updates/v9x/et93u21-056" target="_blank">Vulnerability Management Integration with EventTracker</a></li</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a href="https://www.netsurion.com/environments/microsoft-365-security" target="_blank">Microsoft 365 Connector for SIEM</a></li</td>
            </tr>
            </table>
            `;
            am5.ready(function () {
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

                var xRenderer = am5radar.AxisRendererCircular.new(root, {
                    minGridDistance: 20
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
                    tooltipText: "{categoryX}: {valueY} Years"
                });

                series.columns.template.adapters.add("fill", function (fill, target) {
                    return chart.get("colors").getIndex(series.columns.indexOf(target));
                });

                series.columns.template.adapters.add("stroke", function (stroke, target) {
                    return chart.get("colors").getIndex(series.columns.indexOf(target));
                });

                var data = [
                    { category: 'Python', value: 7 },
                    { category: 'Powershell', value: 8 },
                    { category: 'Cybersecurity', value: 8 },
                    { category: 'HTML/Javascript', value: 7 },
                    { category: 'Regular Expressions', value: 9 },
                    { category: 'EventTracker', value: 6 },
                    { category: 'Securonix SNYPR', value: 1 },
                    { category: 'Log Normalization', value: 9 },
                    { category: 'Security Content Development', value: 8 },
                    { category: 'Offensive Security', value: 2 },
                    { category: 'Visualisation', value: 6 },
                    { category: 'Team Management', value: 4 },
                    { category: 'SIEM', value: 7 }
                ];

                xAxis.data.setAll(data);
                series.data.setAll(data);

                series.appear(1000);
                chart.appear(1000, 100);

            });
        },
        experience: function () {
            document.getElementById("clicksound").play();
            if (document.getElementById('exp')) {
                document.getElementById('exp').remove()
            }
            this.echo(`
<audio id='clicksound'>
    <source src="script/clicksound.wav" type="audio/wav">
</audio>
<div class="grid-container" id='exp'>
    <div class="grid-item">
        <div class="grid-item">
            <p><strong style="color:cyan;">Total Experience :</strong> 9 Years and 4 Month</p>
        </div>
        <div class="grid-item" id="timeline"></div>
    </div>
    <div class="grid-item">
        <div class="grid-item" id="tooltip"></div>
        <div class="grid-item" id="experience"></div>
    </div>
</div>
            
            `, { raw: true })
            var width = 700;
            var testData = [
                {
                    label: "Securonix India PVT. LTD.", times: [
                        { "starting_time": 1637419320000, "ending_time": 1665326520000 }]
                },
                {
                    label: "Netsurion Technologies PVT. LTD.", times: [
                        { "starting_time": 1433947320000, "ending_time": 1637419320000 }
                    ]
                },
                {
                    label: "Axon Network Solution PVT. LTD.", times: [
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
            chart.mouseover(function (d, i, datum) {

            });
            chart.mouseout(function (d, i, datum) {
                document.getElementById("tooltip").innerHTML = ""
            }
            );
            chart.mouseover(function (d, i, datum) {
                document.getElementById("expsound").play();
                document.getElementById("experience").innerHTML = ""
                if (datum['label'] == "Securonix India PVT. LTD.") {
                    document.getElementById("experience").innerHTML = `
                    <table>
                    <tr>
                        <td style="border:none;"><i class="fa-solid fa-timeline"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Duration</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;">11 Months (Dec 2021 - Present)</td>
                    </tr>
                    <tr>
                        <td style="border:none;"><i class="fa-solid fa-building"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Company</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;" id='exptable'>Securonix India PVT. LTD.</td>
                    </tr>
                    <tr>
                        <td style="border:none;"><i class="fa-solid fa-award" style="font-size:10px;"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Last designation</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;">Technical Lead (Detection Engineering)</td>
                    </tr>
                    </table>
                            `
                } else if (datum['label'] == "Netsurion Technologies PVT. LTD.") {
                    document.getElementById("experience").innerHTML = `
                    <table>
                    <tr>
                    <td style="border:none;"><i class="fa-solid fa-timeline"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Duration</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;">6 Year and 6 Months (Jun 2015 - Nov 2021)</td>
                    </tr>
                    <tr>
                    <td style="border:none;"><i class="fa-solid fa-building"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Company </td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;" id='exptable'>Netsurion Technologies PVT. LTD.</td>
                    </tr>
                    <tr>
                        <td style="border:none;"><i class="fa-solid fa-award" style="font-size:10px;"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Last designation</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;">Technical Lead (Security Intelligence)</td>
                    </tr>
                    <tr>
                        <td style="border:none;"><i class="fa-solid fa-bars-staggered"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Netsurion Timeline</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;">
                            <div id="nettimeline"></div>
                        </td>
                    </tr>
                    </table>`
                    var width = 700;
                    var testData = [
                        {
                            label: "Network Security Engineer", times: [
                                { "starting_time": 1433947320000, "ending_time": 1465578620000 }
                            ]
                        },
                        {
                            label: "Subject Matter Expert", times: [
                                { "starting_time": 1465578620000, "ending_time": 1586538623000 }
                            ]
                        },
                        {
                            label: "Technical Lead", times: [
                                { "starting_time": 1586538623000, "ending_time": 1636564223000 }
                            ]
                        }
                    ];
                    var chart = d3.timeline().showAxisTop().stack();
                    chart.tickFormat({
                        format: d3.time.format("%Y"),
                        tickSize: 4
                    })
                    chart.orient("bottom")
                    chart.margin({ left: 150, right: 30, top: 0, bottom: 0 })
                    var svg = d3.select("#nettimeline").append("svg").attr("width", 400)
                        .datum(testData).call(chart);
                } else if (datum['label'] == "Axon Network Solution PVT. LTD.") {
                    document.getElementById("experience").innerHTML = `
                    <table>
                    <tr>
                    <td style="border:none;"><i class="fa-solid fa-timeline"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Duration</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;">1 Year and 7 Months (Dec 2013 - Jun 2015)</td>
                    </tr>
                    <tr>
                    <td style="border:none;"><i class="fa-solid fa-building"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Company </td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;" id='exptable'>Axon Network Solution PVT. LTD.</td>
                    </tr>
                    <tr>
                    <td style="border:none;"><i class="fa-solid fa-award" style="font-size:10px;"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Last designation</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;">System Engineer</td>
                    </tr>
                    </table>`
                } else {
                    document.getElementById("experience").innerHTML = `
                <table>
                <tr>
                <td style="border:none;"><i class="fa-solid fa-timeline"></i></td>
                    <td style="border:none;color:cyan;padding-left:10px;">Duration</td>
                    <td style="border:none;">:</td>
                    <td style="border:none;padding-left:10px;">6 Months (Jun 2013 - Nov 2013)</td>
                </tr>
                <tr>
                <td style="border:none;"><i class="fa-solid fa-building"></i></td>
                    <td style="border:none;color:cyan;padding-left:10px;">Company</td>
                    <td style="border:none;">:</td>
                    <td style="border:none;padding-left:10px;" id='exptable'>IT Support Desk Limited</td>
                </tr>
                <tr>
                <td style="border:none;"><i class="fa-solid fa-award" style="font-size:10px;"></i></td>
                    <td style="border:none;color:cyan;padding-left:10px;">Last designation</td>
                    <td style="border:none;">:</td>
                    <td style="border:none;padding-left:10px;">Desktop Support Engineer</td>
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
| [[;#00FFFF;]Command]     |          [[;#00FFFF;]Description]               |
---------------------------------------------------
| [[;#00FFFF;]whoami]      | To read something about me         |
| [[;#00FFFF;]experience]  | To Read about my work experience   |
| [[;#00FFFF;]projects]    | To Read about project i have done  |
| [[;#00FFFF;]help]        | To get command helps               |
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
| [[;#00FFFF;]Command]     |          [[;#00FFFF;]Description]               |
---------------------------------------------------
| [[;#00FFFF;]whoami]      | To read something about me         |
| [[;#00FFFF;]experience]  | To Read about my work experience   |
| [[;#00FFFF;]projects]    | To Read about project i have done  |
| [[;#00FFFF;]help]        | To get command helps               |
---------------------------------------------------
`,
        prompt: '[[;red;]g_nishan_singh] >'
    });
});