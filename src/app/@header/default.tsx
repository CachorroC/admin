import Title from '#@/components/modal/title';
import Header from '#@/components/navbar/Header';

export default async function Default() {
  return (
    <Header>
      <p>app/(context)/@header/default</p>
      <Title />
    </Header>
  );
}