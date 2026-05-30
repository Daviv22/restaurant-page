import GusFring from "../../assets/gus_fring.png"

export default function Home() {
    return (
        <div className="grid place-content-center">
            <div className="bg-black/50 max-h-72 flex max-w-120">
                <h2>Welcome!</h2>
                <img src={GusFring} alt="Gustavo Fring" className="w-60 h-60"/>
                <p className="text-wrap">
                    "It's the best ingredients. The spiciest spices.
                    All prepared with loving care! And always delivered with a
                    friendly smile. That's the Los Pollos Hermanos promise."
                </p>
            </div>
        </div>
    );
}