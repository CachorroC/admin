import layout from '#@/styles/layout.module.css';
import navbar from '#@/components/navbar/navbar.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import { Loader } from '#@/components/Loader';
import Header from '#@/components/navbar/Header';

export default function Loading() {
  return (
    <Header>
      <Loader />
    </Header>
  );
}
