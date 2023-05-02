import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

const NewRecipe = () => {
  return (
    <Layout>
      <Head>
        <title>New Recipe</title>
      </Head>
      <h1>New Recipe</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
};

export default NewRecipe;
