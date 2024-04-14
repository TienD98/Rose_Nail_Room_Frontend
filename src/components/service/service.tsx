import classNames from 'classnames';
import styles from './service.module.scss';
import BlackAndWhiteFlatIllustrativeBeautyEyelashShudioLogo1Png from '../../assets/black and white flat illustrative beauty eyelash shudio logo (1).png';
import BlackAndWhiteFlatIllustrativeBeautyEyelashShudioLogo2Png from '../../assets/black and white flat illustrative beauty eyelash shudio logo (2).png';
import BlackAndWhiteFlatIllustrativeBeautyEyelashShudioLogo3Png0 from '../../assets/black and white flat illustrative beauty eyelash shudio logo 3.png';

export interface ServiceProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Service = ({ className }: ServiceProps) => {
    return (
        <div id="servicePage" className={classNames(styles.root, styles.rootService)}>
            <div className={styles.serviceGrid}>
                <div className={styles.title}>
                    <h1 className={styles['title-service-h1']}>Services</h1>
                </div>
                <div className={styles.nailServiceGrid}>
                    <div className={styles.nailServiceImg}>
                        <img
                            src={BlackAndWhiteFlatIllustrativeBeautyEyelashShudioLogo1Png}
                            width="180"
                            className={styles.serviceImg}
                        />
                    </div>
                    <div className={styles.nailServiceContent}>
                        <h4 className={styles.nailServiceContentH4}>Nail </h4>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Acrylic Gel: </span>
                            Long-lasting nails with a glossy finish.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Dip Powder: </span>
                            Odorless and lightweight with a chip-resistant finish.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Manicure: </span>
                            Classic, spa, or deluxe options for soft, rejuvenated hands.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Design: </span>From
                            intricate art to simple accents.
                        </p>
                    </div>
                </div>
                <div className={styles.nailServiceGrid}>
                    <div className={styles.nailServiceImg}>
                        <img
                            src={BlackAndWhiteFlatIllustrativeBeautyEyelashShudioLogo2Png}
                            className={styles.serviceImg}
                        />
                    </div>
                    <div className={styles.nailServiceContent}>
                        <h4 className={styles.nailServiceContentH4}>Eye Lash</h4>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Classic: </span>
                            Subtle, natural-looking extensions
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Volume: </span>
                            Dramatic, full, and fluffy extensions.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Cat Eye: </span>
                            Bold, feline-inspired lashes.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Anime: </span>Long,
                            curled lashes for a statement look.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Hybrid: </span>
                            Natural-looking blend of classic and volume.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Mega: </span>
                            Extra-long, glamorous extensions.
                        </p>
                    </div>
                </div>
                <div className={styles.nailServiceGrid}>
                    <div className={styles.nailServiceImg}>
                        <img
                            src={BlackAndWhiteFlatIllustrativeBeautyEyelashShudioLogo3Png0}
                            width="180"
                            className={styles.serviceImg}
                        />
                    </div>
                    <div className={styles.nailServiceContent}>
                        <h4 className={styles.nailServiceContentH4}>Waxing</h4>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Lip: </span>Gentle
                            waxing for smooth, hair-free lips.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Chin: </span>
                            Effective hair removal for a clean chin.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Lip &amp; Chin: </span>
                            Comprehensive hair removal for both areas.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Full Face: </span>
                            Smooth, hair-free skin for your entire face.
                        </p>
                        <p className={styles.nailServiceContentP}>
                            <span className={styles.nailServiceContentSpan}>Armpit: </span>Soft and
                            smooth underarms without unwanted hair.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
