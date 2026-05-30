import FriedChicken from '../../assets/fried_chicken.jpg'

export default function Menu() {
    return (
        <div>

            <div>
                <h2>Nossos produtos</h2>
                <div className="grid gri-cols-2 bg-yellow-500/75 max-w-120">
                    <div className="grid grid-cols-2 grid-rows-3">
                        <img src={FriedChicken} className="col-span-2 w-60 h-60" alt="Fried Chicken" />
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in sagittis mi, vitae efficitur diam. Donec mollis, urna nec pharetra sodales, mauris urna condimentum lorem, vitae blandit sem purus at massa.</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 max-h-96">
                        <img src={FriedChicken} className="col-span-2 w-60 h-60" alt="Fried Chicken" />
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in sagittis mi, vitae efficitur diam. Donec mollis, urna nec pharetra sodales, mauris urna condimentum lorem, vitae blandit sem purus at massa.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}