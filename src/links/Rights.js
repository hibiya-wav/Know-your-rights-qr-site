const links = [

];

export default function Rights() {
    return (
        <div>
            <h1>KNOW YOUR RIGHTS</h1>
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
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
    );
}
