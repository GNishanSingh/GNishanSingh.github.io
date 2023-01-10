$(function () {
    $('body').terminal({
        whoami: function () {
            document.getElementById("clicksound").play();
            if (document.getElementById('details')) {
                document.getElementById('details').remove()
            }
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.echo(`
                <div class="grid-container" id='details'>
                <div class="grid-item">
                    <div class="grid-item" id='basicdetais'></div>
                    <div class="grid-item" id='skillset'><p style="color:cyan;font-size:8px;"><i class="fa-solid fa-kitchen-set"></i> Skill Set</p></div>
                </div>
                </div>
            `, { raw: true })
            } else {
                this.echo(`
                <br>
                <div class="container-fluid" style="width:100%" id="details">
                    <div class="row">
                    <div class="col" id='basicdetais'></div>
                    <div class="col">
                    <div class="card bg-dark">
                    <div class="card-body">
                    <p style="color:cyan;font-size:14px;"><i class="fa-solid fa-kitchen-set"></i> Skill Set</p>
                    <div id="skillset" style="height: 320px; width:80%;"></div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                <br>
                `, { raw: true })
            }
            document.getElementById("basicdetais").innerHTML = `
            <div class="card bg-dark">
            <div class="card-body">
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
                <td style="border:none;padding-left:10px;">9 years and 8 month</td>
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
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://mad-certified.mitre-engenuity.org/02aa55f6-287a-4299-8d47-6cd2c2c2bfae" target="_blank">ATT&CK Cyber Threat Intelligence Certification</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://mad-certified.mitre-engenuity.org/6245378c-8b5d-4888-9246-e0b1f801590d" target="_blank">ATT&CK Security Operations Center Assessment Certification</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://securonixacademy.northpass.com/courses/fefba1a5-03d0-425e-a77c-c4b9f8f4e26a/certificate" target="_blank">Certified SNYPR Content Developer</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://securonixacademy.northpass.com/courses/51d09917-09e5-41ef-8bc1-97a24ff78f52/certificate" target="_blank">Certified SNYPR Data Integrator</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://securonixacademy.northpass.com/courses/dcd6cbc2-727b-47b0-b585-3ad3fffc2f74/certificate" target="_blank">Certified SNYPR Security Analyst</a></li></td>
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
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://github.com/GNishanSingh/Optm_ParserEngine" target="_blank">Optimized Parser Engine</a></li></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://serverlessrepo.aws.amazon.com/applications/us-east-1/655631112574/ETS-AWS-Logforwarder" target="_blank">AWS Connector for SIEM</a></li</td>
            </tr>
            <tr>
               <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://www.netsurion.com/knowledge-packs/microsoft-azure" target="_blank">Azure Connector for SIEM</a></li</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://www.netsurion.com/capabilities/mitre-attack" target="_blank">MITRE ATT&CK Integration with EventTracker</a></li</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://www.netsurion.com/eventtracker-support/software-updates/v9x/et93u21-056" target="_blank">Vulnerability Management Integration with EventTracker</a></li</td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;"></td>
                <td style="border:none;padding-left:10px;"><li><a style="color:cyan;" href="https://www.netsurion.com/environments/microsoft-365-security" target="_blank">Microsoft 365 Connector for SIEM</a></li</td>
            </tr>
            <tr>
            <td style="border:none;"></td>
            <td style="border:none;" colcount="3">
            <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/34468138" width="50" height="60"></img>
            <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/47566814" width="50" height="60"></img>
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="gurmukhnishan-singh" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/gurmukhnishan-singh?trk=profile-badge">Gurmukhnishan Singh</a></div>
            </td>
            </tr>
            </table>
            </div></div>
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
                    { category: 'SIEM', value: 7 },
                    { category: 'Exploit Development', value: 1 }
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
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.echo(`
                <div class="grid-container" id='exp'>
                    <div class="grid-item">
                        <div class="grid-item">
                            <p><strong style="color:cyan;">Total Experience :</strong> 9 Years and 8 Month</p>
                        </div>
                        <div class="grid-item" id="timeline"></div>
                        <div class="grid-item" id="experience"></div>
                    </div>
                </div>`, { raw: true })

            } else {
                this.echo(`
                <div class="container-fluid" id='exp'>
                    <div class="row">
                     <div class="col">
                        <div><p><strong style="color:cyan;">Total Experience :</strong> 9 Years and 8 Month</p></div>
                        <div class="card bg-dark">
                        <div class="card-body">
                        <div id="timeline"></div>
                     </div>
                    <div class="col">
                    <div id="experience">
                    </div>
                    </div>
                    </div>
                </div>`, { raw: true })
            }
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
                    <div class="card bg-dark">
                    <div class="card-body">
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
                    <tr>
                        <td style="border:none;"><i class="fa-solid fa-list-check"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Roles</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;"></td>
                    </tr>
                    <tr>
                        <td style="border:none;"></td>
                        <td style="border:none;"></td>
                        <td style="border:none;"></td>
                        <td style="border:none;padding-left:10px;height:150px;width:300px">
                        <div style="overflow:scroll;height:100%;">
                            <li><strong style="color:green;">Team Management</strong>:
                                <ul> 
                                    <li>Managing Detection and automation team</li>
                                    <li>Process improvement</li>
                                    <li>Delegate work</li>
                                    <li>Collaborating with teams</li>
                                    <li>Handling esclations</li>
                                    <li>Create team goals</li>
                                    <li>Hiring and training teams</li>
                                </ul>
                            </li>
                            <li><strong style="color:green;">Automation/Development</strong>: 
                                <ul>
                                    <li>Automating unit test</li>
                                    <li>Detection as code</li>
                                    <li>Automation scripts for daily repetitive work</li>
                                    <li>ATS requirement</li>
                                    <li>Content Portal</li>
                                </ul>
                            </li>
                            <li><strong style="color:green">SIEM Content Development</strong>: 
                                <ul>
                                    <li>Development of Policy Violation</li>
                                    <li>Analyzing malicious activity</li>
                                    <li>Unit testing for SIEM content</li>
                                    <li>Monitoring content on customer for reducing FP's and finding content issues</li>
                                </ul>
                            </li>
                        </div>
                        </td>
                    </tr>
                    </table>
                    </div></div>`
                } else if (datum['label'] == "Netsurion Technologies PVT. LTD.") {
                    document.getElementById("experience").innerHTML = `
                    <div class="card bg-dark">
                    <div class="card-body">
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
                    <tr>
                        <td style="border:none;"><i class="fa-solid fa-list-check"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Roles</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;"></td>
                    </tr>
                    <tr>
                        <td style="border:none;"></td>
                        <td style="border:none;"></td>
                        <td style="border:none;"></td>
                        <td style="border:none;height:150px;width:100px">
                            <div style="overflow:scroll;height:100%;">
                            <li>Security Intelligence Team Management:
                                <ul>
                                    <li><strong style="color:green;">Delegate work</strong>: Delegating work among team members to achive goals for continuious integration of products and developing SIEM Content.</li>
                                    <li><strong style="color:green;">Process improvement</strong>: Developing and improving process for providing bug free integrators and better content for security</li>
                                    <li><strong style="color:green;">Collaborating with team</strong>: Collaborating with other teams (like SOC Team, Product Enginering, Pre-sales, support) to get feedback and understand customer requirement.</li>
                                    <li><strong style="color:green;">Handling esclations</strong>: Handling complex issues related to SIEM Content/Integration and helping customer to troubleshoot it.</li>
                                    <li><strong style="color:green;">Create team goals</strong>: Reviewing team member work and guide/setting goals for them to imporove team member domain knowledge and reducing bugs.</li>
                                    <li><strong style="color:green;">Hiring and training teams</strong>: Hiring new team members and training them, so that mutual goal will be achived.</li>
                                </ul>
                            </li>
                            <li>Software Development: 
                                <ul>
                                    <li><strong style="color:green;">Integration with SIEM</strong>: There are many integration i have created for EventTracker to bring security telemetry. Following are few i have highlighted here:
                                        <ul>
                                            <li>
                                                Project Name: Integration of M365 with SIEM (Netsurion EventTracker)<br>
                                                Project Description: Integration of Microsoft 365 suite with SIEM for bringing Security telemetry like mail transfer, security/compliance alerts, sharepoint activity, teams activity and other M365 acitivities Suite software.<br>
                                                Developing SIEM Content (Alerts, Dashboard, Reports, Machine Learning Rules)<br>
                                                Project Role: Developer as well as support<br>
                                                Project Page: <a href="https://www.netsurion.com/environments/microsoft-365-security">https://www.netsurion.com/environments/microsoft-365-security</a>
                                            </li>
                                            <li>
                                            Project Name: Integration of MITRE ATT&CK with SIEM (Netsurion EventTracker)<br>
                                            Project Description: Developing framework for detecting MITRE ATT&CK TTP's using security telemetry bringing from customer devices and visualization on SIEM (Netsurion EventTracker) to help SOC team to catch bad guys.<br>
                                            Project Role: Initial POC to stakeholders, lead developer to bring POC to live<br>
                                            Project Page: <a href="https://www.netsurion.com/capabilities/mitre-attack">https://www.netsurion.com/capabilities/mitre-attack</a>
                                            </li>
                                            <li>
                                            Project Name: Integration of Cloud (AWS, AZURE) with SIEM (Netsurion EventTracker)<br>
                                            Project Description: Integrating cloud (aws, azure) with SIEM for fetching security telemetry and developed SIEM content (alerts, reports, dashboard, ML rules) on it <br>
                                            Project Role: Developer as well as support<br>
                                            Project Page: <a href="https://www.netsurion.com/knowledge-packs">https://www.netsurion.com/knowledge-packs</a>
                                            </li>
                                        </ul>
                                        In very similar way i have developed n no. of integration for SIEM like Vulnerablity Management Integration with SIEM, Landspeed Login detection and many more. 
                                    </li>
                                    <li><strong style="color:green;">Research</strong>: <br>
                                        - Developed POC for interactive analytics for making SOC analytics life easier.<br>
                                        - Developed Integration of SIEM with jupyter Notebook for automating analysis of alerts and signal for quick analysis and helping SOC team to reduce MTTR.<br>
                                        - Help in developing POC for ML integration with SIEM for auto classification/tagging of logs<br>
                                    </li>
                                </ul>
                            </li>
                            <li>SIEM Content Development: 
                                <ul>
                                    <li>Handling customer requirement of content development for unsupported devices for detecting malicious activity on customer</li>
                                    <li>Helping other teams with log parsing issues as well as developing on-demand content</li>
                                    <li>Helping SOC Team to build content to detection high severity cyber attack.</li>
                                </ul>
                            </li>
                            </div>
                        </td>
                    </tr>
                    </table>
                    </div></div>
                    `
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
                    chart.margin({ left: 130, right: 30, top: 0, bottom: 0 })
                    var svg = d3.select("#nettimeline").append("svg").attr("width", 400)
                        .datum(testData).call(chart);
                } else if (datum['label'] == "Axon Network Solution PVT. LTD.") {
                    document.getElementById("experience").innerHTML = `
                    <div class="card bg-dark">
                    <div class="card-body">
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
                    <tr>
                        <td style="border:none;"><i class="fa-solid fa-list-check"></i></td>
                        <td style="border:none;color:cyan;padding-left:10px;">Roles</td>
                        <td style="border:none;">:</td>
                        <td style="border:none;padding-left:10px;"></td>
                    </tr>
                    <tr>
                        <td style="border:none;"></td>
                        <td style="border:none;"></td>
                        <td style="border:none;"></td>
                        <td style="border:none;padding-left:10px;">
                            <li>Configuring, maintaining and troubleshooting IT infrastructure servers (e.g DNS, AD, Mail server, FTP, Backup Servers)</li>
                            <li>Configuring and maintaining network devices like router, switches and firewall</li>
                            <li>Visting customer premises and help to troubleshoot issues related to IT applications (like outlook, backups and others)</li>
                            <li>Setting up IT infrastructure for new customer from data center till client workstations</li>
                        </td>
                    </tr>
                    </table>
                    </div></div>
                    `
                } else {
                    document.getElementById("experience").innerHTML = `
                    <div class="card bg-dark">
                    <div class="card-body">
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
                <tr>
                    <td style="border:none;"><i class="fa-solid fa-list-check"></i></td>
                    <td style="border:none;color:cyan;padding-left:10px;">Roles</td>
                    <td style="border:none;">:</td>
                    <td style="border:none;padding-left:10px;"></td>
                </tr>
                <tr>
                    <td style="border:none;"></td>
                    <td style="border:none;"></td>
                    <td style="border:none;"></td>
                    <td style="border:none;padding-left:10px;">
                        <li>Troubleshooting customer issues related to desktop, servers and applications</li>
                        <li>Configuring and maintaining servers (e.g. mail server, active directory, dns and other IT infrastructure servers.)</li>
                        <li>Taking backup on daily/weekly basis of server and users workstations</li>
                    </td>
                </tr>
                </table>
                </div></div>
                `
                }
            });
            var svg = d3.select("#timeline").append("svg").attr("width", width)
                .datum(testData).call(chart);
        },
        projects: function () {
            document.getElementById("clicksound").play();
            this.echo(`
            <div class="card bg-dark"><div class="card-header">Mitre ATT&CK Integration with SIEM</div>
            <div class="card-body">
<table>
        <tr>
            <td style="border:none;color:cyan;">Project</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">MITRE ATT&CK Framework Integration with SIEM</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Language</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">PowerShell, c#, javascript, html, Microsoft SQL server, Elasticsearch</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Description</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">This project was related to creating framework for detecting TTP's using systems logs and representing it in visualization for making easier for a SOC analysts to understand and detection threats.
            </td>
        </tr>
</table>
</div></div>
<br><br>
<div class="card bg-dark"><div class="card-header">SIEM Connector</div>
<div class="card-body">
<table>
        <tr>
            <td style="border:none;color:cyan;">Project</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">Connector for SIEM</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Language</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">PowerShell, python</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Description</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">
            </td>
        </tr>
        <tr>
        <td style="border:none;color:cyan;"></td>
        <td style="border:none;padding-left:10px;padding-right:10px;"></td>
        <td style="border:none;">This project was related to creating connectors for SIEM tools. following are few technologies for which i have created:
            <li>Microsoft 365 Suite</li>
            <li>Amazon AWS</li>
            <li>Microsoft Azure</li>
            <li>Cisco Umbrella</li>
            <li>Vulnerablity Management Tools</li>
            <li>and many more</li>
        </td>
    </tr>
</table>
</div></div>
<br><br>
<div class="card bg-dark"><div class="card-header">EventTracker Jupyter</div>
<div class="card-body">
<table>
        <tr>
            <td style="border:none;color:cyan;">Project</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">Integrating Jupyter Notebook with SIEM</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Language</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">python</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Description</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">This project integrated the Jupyter Notebook with SIEM tools. This tools helps analysts to run the investigation automatically for well known TTP's and alerts generated over SIEM.
            </td>
        </tr>
</table>
</div></div>
<br><br>
<div class="card bg-dark"><div class="card-header">Remote Workforce Threat Detection</div>
<div class="card-body">
<table>
        <tr>
            <td style="border:none;color:cyan;">Project</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">Remote Workforce Threat Detection</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Language</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">PowerShell</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Description</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;"></td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;"></td>
            <td style="border:none;padding-left:10px;padding-right:10px;"></td>
            <td style="border:none;">
            During pandemic there was alot of attack started happen on employee who was working from home. To protect/detect from us attack, i have created feature for EventTracker call RWTD. This feature helped detecting following attacks:
                <li>Geographically improbable access detected</li>
                <li>Login activity from blacklisted location</li>
                <li>Suspicious multiple login attempts from same IP address</li>
            </td>
        </tr>
</table>
</div></div>
<br><br>
<div class="card bg-dark"><div class="card-header">Content Validation Framework</div>
<div class="card-body">
<table>
        <tr>
            <td style="border:none;color:cyan;">Project</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">Content Validation Framework</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Language</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">python</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Description</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">This project created for doing unit test framework for Securonix SIEM content developers. It helps developer to find the mistake in content before commiting.</td>
        </tr>
</table>
</div></div>
<br><br>
<div class="card bg-dark"><div class="card-header">Securonix ATS</div>
<div class="card-body">
<table>
        <tr>
            <td style="border:none;color:cyan;">Project</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">Autonomous Threat Sweep</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Language</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">python</td>
        </tr>
        <tr>
            <td style="border:none;color:cyan;">Description</td>
            <td style="border:none;padding-left:10px;padding-right:10px;">:</td>
            <td style="border:none;">Helped improving Securonix ATS solution via revamping the project and adding multiple components for improving query creation, searching and case creation.</td>
        </tr>
</table>
</div></div>
        `, { raw: true })
        },
        clear: function () {
            location.reload()
        },
        help: function () {
            document.getElementById("clicksound").play();
            this.echo(`
Use following command for getting details about me:
--------------------------------------------------
| [[;#00FFFF;]Command]    |          [[;#00FFFF;]Description]              |
--------------------------------------------------
| [[;#00FFFF;]whoami]     | To read something about me        |
| [[;#00FFFF;]experience] | To Read about my work experience  |
| [[;#00FFFF;]projects]   | To Read about project i have done |
| [[;#00FFFF;]help]       | To get command helps              |
| [[;#00FFFF;]contact]    | To get contact details            |
--------------------------------------------------
This site build with help of [[!;;;;https://terminal.jcubic.pl/#demo]Jquery Terminal Emulator] and hosted on [[!;;;;https://github.com/GNishanSingh/GNishanSingh.github.io]github pages]. I'm keep update this on regular basis, please check this site on regular basis for new updates.
            `)
        },
        contact: function (){
            this.echo(
                `
Following are my contact details:
[[;#00FFFF;]Email Id]   : gurmukhnishansingh@gmail.com
[[;#00FFFF;]Phone No]   : +916005122291
[[;#00FFFF;]LinkedIn]   : https://www.linkedin.com/in/gurmukhnishan-singh/
[[;#00FFFF;]Twitter]    : https://twitter.com/g_nishan_singh
[[;#00FFFF;]GitHub]     : https://github.com/GNishanSingh
[[;#00FFFF;]Resume]     : [[!;;;;/Technical Lead Detection Engineer.pdf]Click Here]
                `
            )
        }
    }, {
        greetings: greetings.innerHTML,
        prompt: '[[;red;]g_nishan_singh] >'
    });
});