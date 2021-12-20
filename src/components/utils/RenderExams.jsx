import styled from 'styled-components'


const Container = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000000;
	h1 {
		color: white;
		width: 2cm;
		height: 1cm;
		background-color: #6c0496;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 2px;
	}
`

const ExamContainer = styled.div`
	background-color: #ffffff;
	width: calc(100vw - 50px);
	max-width: 500px;
	height: 25px;
	margin: 5px;
	box-sizing: border-box;
	border-radius: 5px;
	padding-left: 5px;
`

const RenderExams = ({ exams, title }) => {


	return (
		<Container>
			<h1>{title}</h1>
			{
				exams.map(exam => (
					<ExamContainer onClick={() => { window.open(exam.link, '_blank') }}>
						{exam.name} : {exam.discipline}
					</ExamContainer>
				))
			}
		</Container >
	)
}

export default RenderExams