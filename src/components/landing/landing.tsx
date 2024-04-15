import classNames from 'classnames';
import styles from './landing.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../assets/flowerFalling.json';

export interface LandingProps {
    className?: string;
}

export const Landing = ({ className }: LandingProps) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const scrollToId = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={styles['landing-root']}>
            <div className={styles['content-root']}>
                <div className={classNames(styles.grid, styles['grid-nav'])}>
                    <div className={styles.navigator}>
                        <p
                            className={styles.service}
                            onClick={() => {
                                window.open(
                                    'https://drive.google.com/file/d/1F78aC9UpkfVcmbKtznv3-Jjzt7Eq960C/view?usp=sharing',
                                    '_blank',
                                );
                            }}
                        >
                            Prices
                        </p>
                        <p className={styles.service} onClick={() => scrollToId('servicePage')}>
                            Services
                        </p>
                        <p className={styles.service} onClick={() => scrollToId('aboutPage')}>
                            About
                        </p>
                        <p className={styles.service} onClick={() => scrollToId('contactPage')}>
                            Contact
                        </p>
                    </div>
                    <div className={styles.logo}></div>
                    <div className={styles.bookNowButton}>
                        <button
                            onClick={() => {
                                window.open(
                                    'https://rosenailroom.setmore.com/rosenailroom',
                                    '_blank',
                                );
                            }}
                            className={styles['booknow-button']}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.lottieContainer}>
                        <Lottie options={defaultOptions} speed={0.5} />
                    </div>
                    <div className={styles.welcome}>
                        <h1>
                            Welcome to <br></br>Rose Nail Room
                        </h1>
                        <h2 className={styles.subTitle}>
                            Where Artistry Meets <br></br>Personal Care
                        </h2>
                        <p className={styles.subText}>
                            Discover the perfect blend of creativity and comfort at Rose Nail Room.
                            Experience personalized nail, eyelash, and wax services tailored to your
                            style and needs in our serene Tacoma studio.
                        </p>
                        <button
                            onClick={() => scrollToId('servicePage')}
                            className={styles.serviceButton}
                        >
                            Explore Our Services
                        </button>
                        <button className={styles.priceButton}
                            onClick={() => {
                                window.open(
                                    'https://drive.google.com/file/d/1F78aC9UpkfVcmbKtznv3-Jjzt7Eq960C/view?usp=sharing',
                                    '_blank',
                                );
                            }}>
                            Our Prices</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
