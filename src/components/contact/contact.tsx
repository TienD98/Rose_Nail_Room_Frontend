import classNames from 'classnames';
import styles from './contact.module.scss';
import catAni from '../../assets/catSocial.json';
import Lottie from 'react-lottie';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    const catOptions = {
        loop: true,
        autoplay: true,
        animationData: catAni,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div id="contactPage" className={styles.root}>
            <div className={styles['contact-content']}>
                <div className={styles.top}>
                    <p className={classNames(styles['font-beauty'], styles.title)}>
                        Connect With Us
                    </p>
                    <p className={classNames(styles['font-playfair'], styles.subtitle)}>
                        We&apos;d love to hear from you! Whether you want to schedule an
                        appointment, ask a question, or share your experience, our doors and inboxes
                        are always open.
                    </p>
                    <div className={styles['content-below']}>
                        <div
                            className={classNames(styles['social-media'], styles['font-playfair'])}
                        >
                            <div className={styles.contact}>
                                <p className={styles['reachout-style']}>Reach Out</p>
                                <p
                                    className={styles.link}
                                    onClick={() => {
                                        window.location.href = 'tel:2067752352';
                                    }}
                                >
                                    206 - 775 - 2352
                                </p>
                                <p
                                    className={styles.link}
                                    onClick={() => {
                                        window.location.href =
                                            'mailto:rosenailroomseattle@gmail.com?subject=Nail%20Service%20Inquiry';
                                    }}
                                >
                                    rosenailroomseattle@gmail.com
                                </p>
                            </div>
                            <div className={styles.socials}>
                                <p className={styles['reachout-style']}>
                                    Follow Us on Social Media
                                </p>
                                <p className={styles['text-space']}>
                                    Stay updated with our latest styles and promotions by following
                                    us on social media.
                                </p>
                                <div>
                                    <button
                                        className={styles['contact-button']}
                                        onClick={() => {
                                            window.open(
                                                'https://www.facebook.com/profile.php?id=61558439120233',
                                                '_blank',
                                            );
                                        }}
                                    >
                                        Facebook
                                    </button>
                                    <button
                                        className={classNames(
                                            styles['contact-button'],
                                            styles['contact-button-right'],
                                        )}
                                        onClick={() => {
                                            window.open(
                                                'https://www.instagram.com/rosenailroom/',
                                                'blank',
                                            );
                                        }}
                                    >
                                        Instagram{' '}
                                    </button>
                                </div>
                            </div>
                            <div className={styles.yelp}>
                                <p className={styles['reachout-style']}>Share Your Experience</p>
                                <p className={styles['text-space']}>
                                    Your feedback is invaluable to us. It helps us improve and
                                    continue providing the best service possible. Please leave us a
                                    review on Yelp and let us know how we&apos;re doing!
                                </p>
                                <button
                                    className={styles['contact-button']}
                                    onClick={() => {
                                        window.open(
                                            'https://www.yelp.com/writeareview/biz/X9iZX_dHvIT40WvlZnOzRQ?review_origin=writeareview-search',
                                            '_blank',
                                        );
                                    }}
                                >
                                    Yelp{' '}
                                </button>
                            </div>
                        </div>
                        <div className={styles.lottie}>
                            <Lottie options={catOptions} />
                        </div>
                        <p className={classNames(styles['font-playfair'], styles.subtitle)}>
                            We look forward to connecting with you and creating something beautiful
                            together at Rose Nail Room!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
