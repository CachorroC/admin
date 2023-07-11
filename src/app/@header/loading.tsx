import layout from '#@/styles/scss/layout.module.scss';
import navbar from '#@/components/navbar/navbar.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function Loading() {
    return <div className={layout.loader}></div>;
}
