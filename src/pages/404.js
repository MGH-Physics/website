import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just tried to acces a page that doesn&#39;t exist... Just like the centrifugal force!</p>
  </Layout>
)

export default NotFoundPage
