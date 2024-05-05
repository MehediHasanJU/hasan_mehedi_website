const handlePublicationView = () => {
    const publications = document.querySelector('.rhide');
    publications.classList.toggle('close')
}


const searchFunc = () =>{
    const search = document.querySelector(".search")
    search.classList.toggle("open")
    const icon = document.querySelector(".icon")
    icon.classList.toggle("close")
}
const pubFunc = (x) =>{
    const pub = document.querySelector(`.pub${x}`)
    pub.classList.toggle("open")
}
const openMenu = () => {
    const menu = document.querySelector('.menu');

    menu.classList.toggle('op-cls');
    
}



document.addEventListener("DOMContentLoaded", function () {
    // Get carousel elements
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelectorAll(".slide");
    const nextBtn = carousel.querySelector(".btn-next");
    const prevBtn = carousel.querySelector(".btn-prev");

    let currentSlide = 0;
    let slideInterval;

    // Function to show the current slide
    const showSlide = (slideIndex) => {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    };

    // Function to navigate to the next slide
    const nextSlide = () => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    };

    // Function to navigate to the previous slide
    const prevSlide = () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    };

    // Event listeners for next and previous buttons
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });

    // Function to start the slide interval
    const startSlideInterval = () => {
        slideInterval = setInterval(nextSlide, 5000);
    };

    // Function to reset the slide interval
    const resetInterval = () => {
        clearInterval(slideInterval);
        startSlideInterval();
    };

    // Start the slide interval
    startSlideInterval();

    // Pause the slide interval when hovering over the carousel
    carousel.addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
    });

    // Resume the slide interval when leaving the carousel
    carousel.addEventListener("mouseleave", startSlideInterval);
});

let about =`<div class="about">
<div class="aboutl">
    <img src="pro_pic.jpg" alt="my picture" class="pro-pic">
    <h2>Mahbub-Ul Alam</h2>
    <p><b>Associate Scientist</b></p>
    <p>Environmental Interventions Unit</p>
    <p>icddr,b, Dhaka, Bangladesh </p>
    <br>
    <p><b>PhD Candidate</b></p>
    <p>School of Civil Engineering</p>
    <p>University of Leeds, UK</p>
    <br>
    <p><b>Tsuha Global Fellow</b></p>
    <p>School of Population and Global Health</p>
    <p>University of Western Australia, Australia</p>
    <br>
    <p><b>Editorial Board Member</b></p>
    <p>PLOS Global Health</p>


</div>
<div class="aboutr">
    <!-- <h2>About me</h2> -->
    <p>I am an adherent public health researcher with focused expertise on water, sanitation, hygiene, waste management, anti-microbial resistance, and environmental pollution. I have led 20 studies since 2012 and received over 3M USD as research grant (1.5 M USD as Principal Investigator). I have successfully influenced government policy to improve menstrual hygiene and health in school based on the findings from Bangladesh National Hygiene Survey 2014. My professional aim is to lead effective health research interventions that can help in advocating for policy change with an established public health research career.</p><br>
    <p>I am doing my PhD at University of Leeds,UK, School of Civil Engineering, where I studying about behaviour determinants of household waste water management in Dhaka Bangladesh</p><br>
    <p>In present I'm an Associate scientist of icddr,b Infectious disease division where my keys responsibilities are mentoring junior researchers to develop concept notes and grant proposals, funding acquisition, protocol writing, seek ethical approval, project management and implementation, data analysis, report and manuscript writing, and dissemination.</p>

    <!-- slider container -->
    <div class="carousel">
        <div class="slider">

            <!-- slide 1 -->
            <div class="slide">
            <img src="123.jpg" alt=""/>
            </div>
    
            <!-- slide 2 -->
            <div class="slide">
            <img src="456.jpg" alt="" />
            </div>
    
            <!-- slide 3 -->
            <div class="slide">
            <img src="789.jpg" alt="" />
            </div>
    
            <!-- slide 4 -->
            <!-- <div class="slide">
            <img src="https://source.unsplash.com/random?landscape,city" alt="" />
            </div> -->
    
            <!-- Control buttons -->
            <button class="btn btn-next">&gt;</button>
            <button class="btn btn-prev">&lt;</button>
        </div>
    </div>


</div>
</div>

<div class="award">
<h2 class="award2">Awards</h2>
<div class="card">
    <div class="visualize">
        <img src="https://cloudinary.hbs.edu/hbsit/image/upload/s---wYsCvCM--/f_auto,c_fill,h_265,w_390,/v20200101/97BC62C0C93393579743528DE7AE5745.jpg" alt="">
    </div>
    <div class="awardtext">
        <p class="awardtitle">Received Tsuha Fellowship at the University of Western Australia for the period 2022-2025</p>
        Year 2021
    </div>
</div>
<div class="card">
    <div class="visualize">
        <img src="https://cloudinary.hbs.edu/hbsit/image/upload/s---wYsCvCM--/f_auto,c_fill,h_265,w_390,/v20200101/97BC62C0C93393579743528DE7AE5745.jpg" alt="">
    </div>
    <div class="awardtext">
        <p class="awardtitle">Received Young Scientist award by Bangladesh Academy of Sciences, Dhaka, Bangladesh</p>
        Year 2019
    </div>
</div>
<div class="card">
    <div class="visualize">
        <img src="https://cloudinary.hbs.edu/hbsit/image/upload/s---wYsCvCM--/f_auto,c_fill,h_265,w_390,/v20200101/97BC62C0C93393579743528DE7AE5745.jpg" alt="">
    </div>
    <div class="awardtext">
        <p class="awardtitle">Certificate of award for contribution to Faith-based research, House of Lords, London, UK</p>
        Year 2018
    </div>
</div>
<div class="card">
    <div class="visualize">
        <img src="https://cloudinary.hbs.edu/hbsit/image/upload/s---wYsCvCM--/f_auto,c_fill,h_265,w_390,/v20200101/97BC62C0C93393579743528DE7AE5745.jpg" alt="">
    </div>
    <div class="awardtext">
        <p class="awardtitle">Outstanding contribution in reviewing articles for Public Health in 2018</p>
        Year 2018
    </div>
</div>
<div class="card">
    <div class="visualize">
        <img src="https://cloudinary.hbs.edu/hbsit/image/upload/s---wYsCvCM--/f_auto,c_fill,h_265,w_390,/v20200101/97BC62C0C93393579743528DE7AE5745.jpg" alt="">
    </div>
    <div class="awardtext">
        <p class="awardtitle">International Training Programme (ITP-301) in Sustainable Urban Water and Sanitation Integrated Processes- SUWAS 2016-17, at Stockholm, Sweden and Kampala, Uganda</p>
        Year 2016
    </div>
</div>
<div class="card">
    <div class="visualize">
        <img src="https://cloudinary.hbs.edu/hbsit/image/upload/s---wYsCvCM--/f_auto,c_fill,h_265,w_390,/v20200101/97BC62C0C93393579743528DE7AE5745.jpg" alt="">
    </div>
    <div class="awardtext">
        <p class="awardtitle">Travel award for oral presentation at Water and Health Conference, 2015 at the NC, USA</p>
        Year 2015
    </div>
</div>

</div>`
let research =`<h1>Research</h1>
<h2 class="res2">On Going Research</i></h2>
<!-- <i class="fa fa-angle-right" style="font: size 48px"></i> -->
<h3>Development of WASH sector National Planning, Monitoring and Reporting System</h3>
<p>AThis project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.</p>
<p onclick="handlePublicationView()" class="v_public">View Publications </p>
        <div class="rhide close">
            <ul class="pub2">
                <li><a href="#" class="public2">Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations. </a>
                    <p class="public3">Policy brief from QUISS study 2020</p>
                    <p><b>Mahbub-Ul Alam</b>, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.</p>
                    <hr>
                </li>
            </ul>
        </div>
<hr>
<h3>Development of a divisional level costed action plan to implement the national Menstrual Hygiene Management (MHM) Strategy, 2021</h3>
<p></p>
<hr>
<h2 class="res2">Previous Research</h2>
<h3>WASH Situation Assessment in Bashan Char and Development of Database and Monitoring System</h3>
<p></p>
<hr>
<h3>Evaluation of the Hygiene and Behavior Change Coalition for COVID-19 prevention in Kenya, Zambia and Indonesia</h3>
<p></p>
<hr>
<h3>Urban Sanitation Technologies as International Power Structures (U-STASIS)</h3>
<p></p>
<hr>
<h3>The association between child growth, disease morbidity and antibiotic use among children less than two years of age in Bangladesh: A secondary data analysis</h3>
<p></p>
<hr>
<h3>Multi-sector programme planning across food-nutrition, energy and water-sanitation for the Rohingya Crisis at Cox’s Bazar</h3>
<p></p>
<hr>
<h3>Strategies for achieving sewerage connection in low-income communities in Dhaka</h3>
<p></p>
<hr>
<h3>WASH Mapping at Host Communities and Developing WASH Plan for Cox’s Bazar</h3>
<p></p>
<hr>
<h3>Identifying and overcoming barriers to sustainable school WASH in three Bangladeshi cities</h3>
<p></p>
<hr>
<h3>Impact assessment of WASH in school project</h3>
<p></p>
<hr>
<h3>Identification of quality indicators of shared sanitation in urban Dhaka (QUISS)</h3>
<p></p>
<hr>
<h3>Assessment of household water treatment among Rohingya refugees in Cox’s Bazar</h3>
<p></p>
<hr>
<h3>Assessment of fecal exposure pathways in low-income urban communities of Dhaka, Bangladesh</h3>
<p></p>
<hr>
<h3>Improve WASH facilities in RMG factories of Bangladesh</h3>
<p></p>
<hr>
<h3>Evaluation of a faith-based intervention to improve WASH facilities and practices in the Muslim community of Bangladesh, Pakistan, India, and Indonesia</h3>
<p></p>
<hr>
<h3>SPiloting menstrual hygiene management interventions among schoolgirls of Bangladesh</h3>
<p></p>
<hr>
<h3>Using behaviour change messaging to improve shared toilets in Bangladesh</h3>
<p></p>
<hr>
<h3>SBangladesh National Hygiene Survey</h3>
<p></p>
<hr>`
let artical = `<h1>JOURNAL ARTICALS</h1>
<ul class="pub2">
    <li><a href="https://journals.plos.org/water/article?id=10.1371/journal.pwat.0000041" class="public2">Occupational health and safety status of waste and sanitation workers: A qualitative exploration during the COVID-19 pandemic across Bangladesh.</a>
    <p class="public3">PLOS Water 2023</p>
    <p>Sharior F, <b>Alam MU</b>, Zaqout M, Cawood S, Ferdous S, et al.</p>
    <hr>
    </li>
    <li><a href="https://www.sciencedirect.com/science/article/pii/S2773049222000228" class="public2">Hygiene knowledge and practices and determinants of occupational safety among waste and sanitation workers in Bangladesh during the COVID-19 pandemic.</a>
        <p class="public3">Hygiene and Environmental Health Advances 2022</p>
        <p><b>Mahbub-Ul Alam</b>, S Fazle, Shoaib DM, Hasan M, Tabassum KF, Ferdous S, Hasan M, Rahman M, Tidwell J, Zaqout M, Farah M, Rahman MA, Ahmed A, Ahmed T.</p>
        <hr>
    </li>
    <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-022-13478-1" class="public2">Evaluation of a menstrual hygiene intervention in urban and rural schools in Bangladesh: a pilot study.</a>
        <p class="public3">BMC Public Health 2022</p>
        <p><b>Mahbub-Ul Alam</b>, Sultana, F., Hunter, E.C. et al.</p>
        <hr>
    </li>
    <li><a href="https://www.mdpi.com/1660-4601/19/1/360" class="public2">Contamination of Fresh Produce with Antibiotic-Resistant Bacteria and Associated Risks to Human Health: A Scoping Review</a>
        <p class="public3">International Journal of Environmental Research and Public Health 2022</p>
        <p>Rahman, Mahbubur, <b>Mahbub-Ul Alam</b>, Sharmin K. Luies, Abul Kamal, Sharika Ferdous, Audrie Lin, Fazle Sharior, Rizwana Khan, Ziaur Rahman, Sarker M. Parvez, Nuhu Amin, Rezaul Hasan, Birkneh T. Tadesse, Neelam Taneja, Mohammad A. Islam, and Ayse Ercumen.</p>
        <hr>
    </li>
    <li><a href="https://www.researchprotocols.org/2021/11/e33365" class="public2">Effective Treatment Strategies for the Removal of Antibiotic-Resistant Bacteria, Antibiotic-Resistance Genes, and Antibiotic Residues in the Effluent From Wastewater Treatment Plants Receiving Municipal, Hospital, and Domestic Wastewater: Protocol for a Systematic Review. </a>
        <p class="public3">JMIR Research Protocols 2021</p>
        <p><b>Mahbub-Ul Alam</b>, Ferdous S, Ercumen A, Lin A, Kamal A, Luies SK, Sharior F, Khan R, Rahman MZ, Parvez SM, Amin N, Tadesse BT, Moushomi NA, Hasan R, Taneja N, Islam MA, Rahman M. </p>
        <hr>
    </li>
    <li><a href="#" class="public2">Teachers’ perspective on implementation of menstrual hygiene management and puberty education in a pilot study in Bangladeshi schools.</a>
        <p class="public3">Global Health Action 2021</p>
        <p>Mehjabin Tishan Mahfuz, Sultana F, Hunter EC, Jahan F, Akand F, Khan S, Mobashhara M, Rahman M, <b>Alam MU</b>, Unicomb L, Luby SP, & Winch PJ.</p>
        <hr>
    </li>
    <li><a href="https://www.mdpi.com/1660-4601/17/19/7201?trk=public_post_share-update_update-text" class="public2">Strategies to Connect Low-Income Communities with the Proposed Sewerage Network of the Dhaka Sanitation Improvement Project, Bangladesh: A Qualitative Assessment of the Perspectives of Stakeholders.</a>
        <p class="public3">International Journal of Environmental Research and Public Health 2020</p>
        <p><b>Mahbub-Ul Alam</b>, Sharior F, Ferdous S, Norman G, Rahman M, Tidwell J B</p>
        <hr>
    </li>
    <li><a href="https://www.mdpi.com/2073-4441/12/11/3149" class="public2">Barriers and Enabling Factors for Central and Household Level Water Treatment in a Refugee Setting: A Mixed-Method Study among Rohingyas in Cox’s Bazar, Bangladesh. </a>
        <p class="public3">Water 2020</p>
        <p><b>Mahbub-Ul Alam</b>, Unicomb L, Ahasan S M, Amin N, Biswas D, Ferdous S, Afrin A, Sarker S, Rahman M. </p>
        <hr>
    </li>
    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7866357/" class="public2">Where Shared Sanitation is the Only Immediate Option: A Research Agenda for Shared Sanitation in Densely Populated Low-Income Urban Settings. </a>
        <p class="public3">The American journal of tropical medicine and hygiene 2020</p>
        <p>James Tidwell, Chipungu J, Ross I, Antwi-Agyei P, <b>Alam MU</b>, Tumwebaze I K, Norman G, Cumming O, Simiyu S.</p>
        <hr>
    </li>
    <li><a href="https://iwaponline.com/washdev/article/10/4/959/77524/When-is-shared-sanitation-acceptable-in-low-income" class="public2">When is shared sanitation acceptable in low-income urban settlements? A user perspective on shared sanitation quality in Kumasi, Kisumu and Dhaka.</a>
        <p class="public3">Journal of Water, Sanitation and Hygiene for Development 2020</p>
        <p>Vasco Schelbert, Meili D, <b>Alam MU</b>, Simiyu S, Antwi-Agyei P, Adjei K A, Dwumfour-Asare B, Rahman M, Ferdous S, Sarker S, Günther I, Lüthi C. </p>
        <hr>
    </li>
    <li><a href="https://www.frontiersin.org/articles/10.3389/fvets.2020.00078/full" class="public2">Drivers of Antibiotic Use in Poultry Production in Bangladesh: Dependencies and Dynamics of a Patron-Client Relationship.</a>
        <p class="public3">Frontiers in Veterinary Science 2020</p>
        <p>Abdullah Al Masud, Rousham EK, Islam MA, <b>Alam MU</b>, Rahman M, Mamun AA, Sarker S, Asaduzzaman M, Unicomb L.</p>
        <hr>
    </li>
    <li><a href="https://www.mdpi.com/2073-4441/12/7/2073" class="public2">Landlords’ and Compound Managers’ Role in Improving and Sustaining Shared Latrines in Three Dhaka City Slums.</a>
        <p class="public3">Water 2020</p>
        <p>Yeasmin F, Rahman M, Luby SP, Das JB, Begum F, Saxton RE, Nizame FA, Hwang ST, <b>Alam MU</b>, Hossain MK, Yeasmin D, Unicomb L, Winch PJ. </p>
        <hr>
    </li>
    <li><a href="https://sciendo.com/article/10.2478/gp-2019-0016" class="public2">Psychometric properties of the Bangla version of the Kessler Psychological Distress Scale (K6)</a>
        <p class="public3">Global Psychiatry 2019</p>
        <p>Khan A, Uddin R, Alam N, Sultana S, <b>Alam MU</b>, Ahmed R.</p>
        <hr>
    </li>
    <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S1438463919303797" class="public2">Human exposure to antimicrobial resistance from poultry production: assessing hygiene and waste-disposal practices in Bangladesh.</a>
        <p class="public3">International Journal of Hygiene and Environmental Health 2019</p>
        <p><b>Mahbub-Ul Alam</b>, Rahman M, Islam MA, Asaduzzaman M, Sarker S, Rousham E, Unicomb L.</p>
        <hr>
    </li>
    <li><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0221193" class="public2">Quantitative assessment of fecal contamination in multiple environmental sample types in urban communities in Dhaka, Bangladesh using SaniPath microbial approach.</a>
        <p class="public3">PLoS One 2019</p>
        <p>Nuhu Amin, Rahman M, Raj S, Ali S, Green J, Das S, Doza S, Mondol MH, Wang Y, Islam MA, <b>Alam MU</b>, Huda TMN, Haque S, Unicomb L, Joseph G, Moe CL. </p>
        <hr>
    </li>
    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6726962/" class="public2">Hygiene in Restaurants and among Street Food Vendors in Bangladesh. </a>
        <p class="public3">The American journal of tropical medicine and hygiene 2019</p>
        <p>Fosiul A. Nizame, <b>Alam MU</b>, Masud AA, Shoab AK, Opel A, Islam MK, Luby SP, Unicomb L. </p>
        <hr>
    </li>
    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6159562/" class="public2">Health-Care Facility Water, Sanitation, and Health-Care Waste Management Basic Service Levels in Bangladesh: Results from a Nation-Wide Survey</a>
        <p class="public3">The American journal of tropical medicine and hygiene 2018</p>
        <p>Unicomb L, Horng L, <b>Alam MU</b>, Halder A, Shoab A, Ghosh P, Islam K, Opel A, Luby SP. </p>
        <hr>
    </li>
    <li><a href="https://onlinelibrary.wiley.com/doi/full/10.1111/tmi.12902" class="public2">Behaviour change intervention to improve shared toilet maintenance and cleanliness in urban slums of Dhaka: a cluster-randomized controlled trial.</a>
        <p class="public3">Tropical Medicine & International Health 2017</p>
        <p><b>Mahbub-Ul Alam</b>, Winch PJ, Yeasmin F, Nizame FA, Saxton RE, Norman G, Masud A, Begum F, Rahman M, Unicomb L, Luby SP. </p>
        <hr>
    </li>
    <li><a href="https://bmjopen.bmj.com/content/7/7/e015508.abstract" class="public2">Menstrual hygiene management among Bangladeshi adolescent schoolgirls and risk factors affecting school absence: results from a cross-sectional survey.</a>
        <p class="public3">BMJ open 2017</p>
        <p><b>Mahbub-Ul Alam</b>, Luby SP, Halder A, Islam K, Opel A, Shoab AK, Ghosh PK, Rahman M, Mahon T, Unicomb L. </p>
        <hr>
    </li>
    <li><a href="https://onlinelibrary.wiley.com/doi/full/10.1111/tmi.12914" class="public2">If I do not have enough water, then how could I bring additional water for toilet cleaning?! Addressing water scarcity to promote hygienic use of shared toilets in Dhaka, Bangladesh.</a>
        <p class="public3">Tropical Medicine & International Health 2017</p>
        <p>Ronald Saxton, Yeasmin F, <b>Alam MU</b>, Masud A, Dutta NC, Yeasmin D, Luby SP, Unicomb L, Winch PJ.</p>
        <hr>
    </li>
    <li><a href="https://link.springer.com/article/10.1186/s12889-017-4693-x" class="public2">Piloting a low-cost hardware intervention to reduce improper disposal of solid waste in communal toilets in low-income settlements in Dhaka, Bangladesh.</a>
        <p class="public3">BMC Public Health 2017</p>
        <p>Farzana Yeasmin, Luby SP, Saxton RE, Nizame FA, <b>Alam MU</b>, Dutta NC, Masud AA, Yeasmin D, Layden A, Rahman H, Abbott R, Unicomb L, Winch PJ. </p>
        <hr>
    </li>
    <li><a href="https://link.springer.com/article/10.1007/s10393-016-1166-0" class="public2">Investigating rare risk factors for Nipah virus in Bangladesh: 2001 to 2012.</a>
        <p class="public3">Ecohealth 2016</p>
        <p>Sonia Hegde, Sazzad HMS, Hossain MJ, <b>Alam MU</b>, Kenah E, Daszak P, Rollin P, Rahman M, Luby SP, Gurley ES.</p>
        <hr>
    </li>
    <li><a href="https://www.sciencedirect.com/science/article/pii/S0195670116303632" class="public2">Healthcare worker and family caregiver hand hygiene in Bangladeshi healthcare facilities: results from the Bangladesh National Hygiene Baseline Survey.</a>
        <p class="public3">Journal of Hospital Infection 2016</p>
        <p>Lily Horng, Unicomb L, <b>Alam MU</b>, Halder A, Shoab AK, Ghosh PK, Opel A, Islam K, Luby SP. </p>
        <hr>
    </li>
    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4973174/" class="public2">Availability and Quality of Emergency Obstetric and Newborn Care in Bangladesh.</a>
        <p class="public3">The American Journal of Tropical Medicine and Hygiene 2016</p>
        <p>Wit Wichaidit, <b>Alam MU</b>, Halder AK, Unicomb L, Hamer DH, Ram PK. </p>
        <hr>
    </li>
    <li><a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-016-3416-z" class="public2">Its not what you say, its how you say it: Communicating Nipah virus prevention messages during an outbreak in Bangladesh.</a>
        <p class="public3">BMC Public Health 2016</p>
        <p>Shahana Parveen, Islam MS, Begum M, <b>Alam MU</b>, Sazzad S, Gurley ES, Sultana R, Rahman M, Hossain MJ, Luby SP.</p>
        <hr>
    </li>
    <li><a href="https://www.ijic.info/article/view/11121" class="public2">Behaviour change intervention to reduce caregivers’ exposure to patients’ oral and nasal secretions in Bangladesh.</a>
        <p class="public3">International Journal of Infection Control 2013</p>
        <p>Emily Gurley, Islam MS, Nahar N, Sultana R, Hossain MJ, Homaira N, Parveen S, Naushin T, <b>Alam MU</b>, Khan AKMD, Chowdhury NMRA, Southern D, Luby SP. </p>
        <hr>
    </li>`
let publications =`xyz`
let funding =`<h1>Funding History</h1>
<div class="fund">
    <p>Total amount awarded till date: 3,725,990$</p>
    <p>As Principal Investigator (PI): 1,395,468$</p>
    <p>As Co-Principal Investigator (Co-PI):&nbsp&nbsp&nbsp 985,649$</p>
    <p>As Co-Investigator (Co-I): 1,344,873$</p>
</div>
<div class="fh">
<div class="table2">
        <div class="flex header2">
            <p class="w-10">Year</p>
            <p class="w-32">Title</p>
            <p class="w-16">Role</p>
            <p class="w-14">Awarded</p>
            <p class="w-20">Time Period</p>
            <p class="w-14">Doner</p>
        </div>
        <div class="flex data">
            <p class="w-10">2023</p>
            <p class="w-32">Development of WASH sector National Planning, Monitoring and Reporting System </p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$118,525</p>
            <p class="w-20">Dec 2022 - Sep 2023</p>
            <p class="w-14">UNICEF</p>
        </div>
        <div class="flex data">
            <p class="w-10">2022</p>
            <p class="w-32">Development of a divisional level costed action plan to implement the national Menstrual Hygiene Management (MHM) Strategy, 2021 </p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$158,372</p>
            <p class="w-20"></p>
            <p class="w-14">UNICEF</p>
        </div>
        <div class="flex data">
            <p class="w-10">2022</p>
            <p class="w-32">WASH Situation Assessment in Bashan Char and Development of Database and Monitoring System</p>
            <p class="w-16">Co-Principal Investigator</p>
            <p class="w-14">$152,022</p>
            <p class="w-20"></p>
            <p class="w-14">UNICEF</p>
        </div>
        <div class="flex data">
            <p class="w-10">2021</p>
            <p class="w-32">Evaluation of the Hygiene and Behavior Change Coalition for COVID-19 prevention in Kenya, Zambia and Indonesia</p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$693,708</p>
            <p class="w-20"></p>
            <p class="w-14">LSHTM</p>
        </div>
        <div class="flex data">
            <p class="w-10">2021</p>
            <p class="w-32">Urban Sanitation Technologies as International Power Structures (U-STASIS)</p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$31,183</p>
            <p class="w-20"></p>
            <p class="w-14">SNIS</p>
        </div>
        <div class="flex data">
            <p class="w-10">2020</p>
            <p class="w-32">The association between child growth, disease morbidity and antibiotic use among children less than two years of age in Bangladesh: A secondary data analysis</p>
            <p class="w-16">Co-Investigator</p>
            <p class="w-14">$170,000</p>
            <p class="w-20"></p>
            <p class="w-14">SIDA</p>
        </div>
        <div class="flex data">
            <p class="w-10">2020</p>
            <p class="w-32">Multi-sector programme planning across food-nutrition, energy and water-sanitation for the Rohingya Crisis at Cox’s Bazar</p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$41,269</p>
            <p class="w-20"></p>
            <p class="w-14">Institute of Development Studies</p>
        </div>
        <div class="flex data">
            <p class="w-10">2019</p>
            <p class="w-32">Strategies for achieving sewerage connection in low-income communities in Dhaka</p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$189,874</p>
            <p class="w-20"></p>
            <p class="w-14">WSUP</p>
        </div>
        <div class="flex data">
            <p class="w-10">2019</p>
            <p class="w-32">WASH Mapping at Host Communities and Developing WASH Plan for Cox’s Bazar</p>
            <p class="w-16">Co-Principal Investigator</p>
            <p class="w-14">$254,743</p>
            <p class="w-20"></p>
            <p class="w-14">UNICEF</p>
        </div>
        <div class="flex data">
            <p class="w-10">2019</p>
            <p class="w-32">Identifying and overcoming barriers to sustainable school WASH in three Bangladeshi cities</p>
            <p class="w-16">Co-Investigator</p>
            <p class="w-14">$89,419</p>
            <p class="w-20"></p>
            <p class="w-14">WSUP</p>
        </div>
        <div class="flex data">
            <p class="w-10">2019</p>
            <p class="w-32">Impact assessment of WASH in school project </p>
            <p class="w-16">Co-Investigator</p>
            <p class="w-14">$57,323</p>
            <p class="w-20"></p>
            <p class="w-14">WaterAid Bangladesh</p>
        </div>
        <div class="flex data">
            <p class="w-10">2018</p>
            <p class="w-32">Identification of quality indicators of shared sanitation in urban Dhaka (QUISS)</p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$55,500</p>
            <p class="w-20"></p>
            <p class="w-14">EAWAG</p>
        </div>
        <div class="flex data">
            <p class="w-10">2018</p>
            <p class="w-32">Assessment of household water treatment among Rohingya refugees in Cox’s Bazar</p>
            <p class="w-16">Co-Principal Investigator</p>
            <p class="w-14">$78,890</p>
            <p class="w-20"></p>
            <p class="w-14">Oxfam</p>
        </div>
        <div class="flex data">
            <p class="w-10">2017</p>
            <p class="w-32">Assessment of fecal exposure pathways in low-income urban communities of Dhaka, Bangladesh</p>
            <p class="w-16">Co-Investigator</p>
            <p class="w-14">$54,636</p>
            <p class="w-20"></p>
            <p class="w-14">Emory University</p>
        </div>
        <div class="flex data">
            <p class="w-10">2017</p>
            <p class="w-32">Improve WASH facilities in RMG factories of Bangladesh</p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$38,957</p>
            <p class="w-20"></p>
            <p class="w-14">The Waterloo Foundation, UK</p>
        </div>
        <div class="flex data">
            <p class="w-10">2016</p>
            <p class="w-32">Evaluation of a faith-based intervention to improve WASH facilities and practices in the Muslim community of Bangladesh, Pakistan, India, and Indonesia</p>
            <p class="w-16">Principal Investigator</p>
            <p class="w-14">$65,080</p>
            <p class="w-20"></p>
            <p class="w-14">Global One 2015</p>
        </div>
        <div class="flex data">
            <p class="w-10">2016</p>
            <p class="w-32">Principal Investigatorloting menstrual hygiene management interventions among schoolgirls of Bangladesh</p>
            <p class="w-16">Co-Principal Investigator</p>
            <p class="w-14">$499,994</p>
            <p class="w-20"></p>
            <p class="w-14">BMGF</p>
        </div>
        <div class="flex data">
            <p class="w-10">2014</p>
            <p class="w-32">Using behaviour change messaging to improve shared toilets in Bangladesh</p>
            <p class="w-16">Co-Investigator</p>
            <p class="w-14">$170,438</p>
            <p class="w-20"></p>
            <p class="w-14">Stanford University</p>
        </div>
        <div class="flex data">
            <p class="w-10">2012</p>
            <p class="w-32">Bangladesh National Hygiene Survey</p>
            <p class="w-16">Co-Investigator</p>
            <p class="w-14">$803,057</p>
            <p class="w-20"></p>
            <p class="w-14">WaterAid Bangladesh</p>
        </div>
    </div>
    

</div>`
let working = `<h1>WORKING PAPERS</h1>
<ul class="pub3">
    <li><a href="https://itn.buet.ac.bd/web/resource/health-and-safety-of-waste-and-sanitation-workers-during-the-pandemic/" class="public2">Health and Safety of Waste and Sanitation Workers during the Pandemic: A Case Study in Selected Cities of Bangladesh.</a>
        <p class="public3">ITN Research Series 15. ITN BUET 2021</p>
        <p><b>Mahbub-Ul Alam</b>, Ahmed T.</p>
        <hr>
    </li>
    <li><a href="https://www.researchgate.net/publication/342639154_Cox's_Bazar_District_WASH_Mapping_and_Participatory_WASH_Plan" class="public2">WASH Mapping at Host Communities and Participatory WASH Plan for Cox’s Bazar District.</a>
        <p class="public3">Final Report, icddr,b, January, 2020. </p>
        <p><b>Mahbub-Ul Alam</b>, Rahman M et al.</p>
        <hr>
    </li>
    <li><a href="#" class="public2">Improve water, sanitation and hygiene situation in readymade garments factories in Bangladesh.</a>
        <p class="public3">Final Report, icddr,b, May 2019.</p>
        <p><b>Mahbub-Ul Alam</b>, Afrin A, Sarker S, Rahman M. </p>
        <hr>
    </li>
    <li><a href="#" class="public2">A Formative Study on Household Water Treatment among Rohingya Refugees in Cox’s Bazar, Bangladesh.</a>
        <p class="public3">Final Report, icddr,b November 2018.</p>
        <p><b>Mahbub-Ul Alam</b>, Rahman M et al., </p>
        <hr>
    </li>
    <li><a href="#" class="public2">Evaluation of Faith Based Behaviour Change Intervention to Improve WASH Facilities and Practices in Bangladesh, Indonesia and Nepal.</a>
        <p class="public3">Working paper, icddr,b, August 2018</p>
        <p><b>Mahbub-Ul Alam</b>, Afrin A, Sarker S.</p>
        <hr>
    </li>
    <li><a href="http://www.wsup.com/wp-content/uploads/2013/05/3.pdf" class="public2">Report on Using behavior change messaging to improve shared toilets in Dhaka, Bangladesh 2015 </a>
        <p class="public3"></p>
        <p><b>Mahbub-Ul Alam</b>, Yeasmin F, Begum F, Rahman M, Unicomb L, Winch P, Luby SP.</p>
        <hr>
    </li>
    <li><a href="http://www.psu-wss.org/bnhbs.html" class="public2">Bangladesh National Hygiene Baseline Survey: Preliminary Report.</a>
        <p class="public3">icddr,b, WaterAid Bangladesh, PSU, GoB. Dhaka, 2014.</p>
        <p><b>Mahbub-Ul Alam</b>, Unicomb L, Luby SP, Halder AK, Ram PK.</p>
        <hr>
    </li>`
let policy = `<h1>POLICY BRIEFS</h1>
<ul class="pub4">
    <li><a href="#" class="public2">Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations. </a>
        <p class="public3">Policy brief from QUISS study 2020</p>
        <p><b>Mahbub-Ul Alam</b>, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.</p>
        <hr>
    </li>
</ul>`
let consulting =`<h1>Consulting</h1>`
let contract =`<h1>Contact</h1>
<div class="main">
    <div class="con">
        <h2>Mahbub-Ul Alam</h2>
        <p>Associate Scientist</p>
        <p>Health System and Population Studies Division</p>
        <P>icddr'b</P>
        <p>mahbub@icddrb.org</p>
        
    </div>
    <div class="body">
        <input type="text" class="text" placeholder="First Name">
        <input type="text" class="text" placeholder="Last Name">
        <input type="text" class="text" placeholder="Email">
        <textarea name="message" id="msg" cols="30" rows="10" placeholder="Your message..."></textarea>
        <button class="btn_c">SEND EMAIL</button>
    </div>
</div>`
const abtFunc = () =>{
    let temp = document.querySelector(".content");
    temp.innerHTML = about; 
}
const resFunc = () =>{
    let temp = document.querySelector(".content");
    temp.innerHTML = research; 
}
// const publiFunc = () =>{
//     let temp = document.querySelector(".content");
//     temp.innerHTML = publications; 
// }
const artFunc = () =>{
    let temp = document.querySelector(".content");
    temp.innerHTML = artical; 
}
const workFunc = () =>{
    let temp = document.querySelector(".content");
    temp.innerHTML = working; 
}
const polFunc = () =>{
    let temp = document.querySelector(".content");
    temp.innerHTML = policy; 
}

const funFunc = () =>{
    let temp = document.querySelector(".content");
    temp.innerHTML = funding; 
}
const conFunc = () =>{
    let temp = document.querySelector(".content");
    temp.innerHTML = consulting; 
}
const cntFunc = () =>{
    let temp = document.querySelector(".content");
    temp.innerHTML = contract; 
}