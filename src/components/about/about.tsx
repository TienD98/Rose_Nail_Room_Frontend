import styles from './about.module.scss';
import Lottie from 'react-lottie';
import girlAni from '../../assets/animateGirl.json';
import catAni from '../../assets/animateVision.json';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    const girlOptions = {
        loop: true,
        autoplay: true,
        animationData: girlAni,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const catOptions = {
        loop: true,
        autoplay: true,
        animationData: catAni,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div id="aboutPage" className={styles.aboutRoot}>
            <div className={styles.aboutTitle}>
                <h2 className={styles.aboutH2}>Artistry, Care, and Tranquility</h2>
            </div>
            <div className={styles.subTitleAbout}>
                <h3 className={styles.aboutH3}>
                    At Rose Nail Room in Tacoma, I believe in the art of personal touch. With over
                    five years in the nail industry, I&apos;ve created a space where your nails are
                    celebrated, and relaxation is guaranteed.
                </h3>
            </div>
            <div className={styles.contentAbout}>
                <div className={styles.contentLeft}>
                    <h2 className={styles.aboutH3Left}>Our Promise</h2>
                    <div className={styles.lottieGirl}>
                        <Lottie options={girlOptions} />
                    </div>
                    <p className={styles.aboutText}>
                        <span className={styles.subtitleAbout}>Personalized Care: </span>One-on-one
                        appointments tailored to your style.
                    </p>
                    <p className={styles.aboutText}>
                        <span className={styles.subtitleAbout}>Quality &amp; Hygiene: </span>
                        Top-of-the-line products in a sanitized environment.
                    </p>
                    <p className={styles.aboutText}>
                        <span className={styles.subtitleAbout}>Satisfaction: </span>We&apos;re not
                        happy until you are, with every visit.{' '}
                    </p>
                </div>
                <div className={styles.contentRight}>
                    <h2 className={styles.aboutH3Left}>Our Vision</h2>
                    <div className={styles.lottieGirl}>
                        <Lottie options={catOptions} />
                    </div>
                    <p className={styles.aboutText}>
                        To expand our services and create an even more inviting space for you to
                        unwind and rejuvenate.
                    </p>
                </div>
                <div className={styles.joinButton}>
                    <button
                        onClick={() => {
                            window.open('https://rosenailroom.setmore.com/rosenailroom', '_blank');
                        }}
                    >
                        Book Your Appointment Now
                    </button>
                </div>
            </div>
        </div>
    );
};
