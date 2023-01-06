import Link from 'next/link'
import { useRouter } from 'next/router';
import Layout from '../components/Layout'
import QuotesCard from '../components/Quotes/QuotesCard';
import { Quotes } from '../interfaces'

interface IndexPageProps {
  data: Quotes
}

export default function IndexPage({ data }: IndexPageProps) {
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  }
  return (
    <Layout title="Random Quotes App">
      <QuotesCard refreshData={refreshData} quotes={data}/>
    </Layout>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.quotable.io/random`)
  const data = await res.json()
  // Pass data to the page via props


  return { props: { data } }
}

