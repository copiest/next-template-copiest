import styled from '@emotion/styled'
import Message from '@shared/Message'

function IndexPage() {
  return (
    <Container>
      <Message />
    </Container>
  )
}

const Container = styled.div``

export const getStaticProps = () => {
  return { props: {} }
}

export default IndexPage
