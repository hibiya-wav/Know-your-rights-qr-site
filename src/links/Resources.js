const links = [
    "https://juntosseguros.com/",
    "https://padlet.com/PeopleoverPapers/people-over-papers-anonymous-an-nimo-lf0l47ljszbto2uj",
    "https://www.aclu.org/know-your-rights/immigrants-rights",
    "https://www.informedimmigrant.com/",
    "https://unitedwedream.org/resources/",
    "https://maketheroadny.org/our-programs/",
    "https://maketheroadnj.org/know-your-rights-conoce-tus-derechos/",
    "https://www.ny.gov/sites/default/files/atoms/files/ImmigrationResourceGuide_v2.pdf",
    "https://cmsny.org/resource-hub/",
    "https://www.nyic.org/resources-training/kyr/",
    "https://www.njimmigrantjustice.org/kyr",
    "https://careercenter.camden.rutgers.edu/undocumented/",
    "https://www.njcic.org/immigrants-rights-resources",
    "https://www.justice.gov/eoir/file/ProBonoNJ/dl",
    "https://www.justice.gov/eoir/file/ProBonoNY/dl",
    "https://www.justice.gov/eoir/file/ProBonoCT/dl",
    "https://www.immigrationadvocates.org/nonprofit/legaldirectory/search?state=NJ",
    "ex.php/todos-los-avisos/272-aplicacion-movil-consulapp-contigo",
    "https://www.ilrc.org/red-cards-tarjetas-rojas",
    "https://www.instagram.com/nycprotestcoverage/?hl=en",
    "https://www.instagram.com/nycicewatch/",
];

export default function Resources() {
    return (
        <div>
            <h1 className="sub-title">RECURSOS Y DERECHOS</h1>
            <div className="center_links"
                style={{
                    paddingBottom: "50px",
                }}
            >
                <ul className="uhhh">
                    {links.map((item, index) => (
                        <li key={index} className="resources">
                            <a
                                href={item}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
