import hero from '../assets/BurgerHero.jpg'

const HeroLayout = () => {
    return (
        <div className='flex justify-between gap-8'>
            <div className='flex: 50% flex-1 justify-center items-center'>
                Takeaway today
            </div>
            <img src={hero} className='flex: 50% flex-1 max-w-[50%] max-h-[50%]' />
        </div>
    )
}

export default HeroLayout;