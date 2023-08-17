import { DrawerMenuButton } from '#@/components/Buttons/NavButtons';
import Title from '#@/components/Headings/title';
import Header from '#@/components/navbar/Header';
import Drawer from '#@/components/navbar/drawer';
import { LinkCard } from '#@/components/search/link';

export default function DefaultHEader () {
  return (
    <Header>
      <Title/>
      <Drawer>
        <DrawerMenuButton />
      </Drawer>
    </Header>
  );
}