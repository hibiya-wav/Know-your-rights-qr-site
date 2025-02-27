const links = [
    "https://protest.one/calendar/",
    "https://maketheroadny.org/",
    "https://maketheroadnj.org/",
    "https://socialists.nyc/",
    "https://dsanj.org/",
    "https://ctdsa.org/",
];

export default function Get_Together() {
    return (
        <div>
            <h1 className="sub-title">ORGANIZA</h1>
            <div className="center_links"
             style={{
                paddingBottom: "50px",
            }}>
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
