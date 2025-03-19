export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(id, "here is id");
  return (
    <>
      <h1>THis is server end page</h1>
    </>
  );
}
