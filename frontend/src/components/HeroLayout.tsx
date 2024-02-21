import hero from '../assets/BurgerHero.jpg'

const HeroLayout = () => {
    return (
        <div>
            <img src={hero} className='w-full max-h-fit object-cover'/>
        </div>
    )
}

export default HeroLayout;