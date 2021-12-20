import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getQuery } from "../../services/API"
import Background from "../utils/Background"
import RenderExams from "../utils/RenderExams"
import { categories } from "../../globals"


const ExamsByProfessorScreen = () => {

	const { id } = useParams()

	const [exams, setExams] = useState('')

	useEffect(() => {
		getQuery('professor', decodeURI(id)).then(res => {
			setExams(res.data)
		})
		//eslint-disable-next-line
	}, [])

	return (
		<Background>
			{
				categories.map(({ name: category }) => {
					if (exams === '') return ''
					const examsWithCategory = exams.filter(exam => exam.category === category)

					if (examsWithCategory.length === 0) return ''

					return <RenderExams key={category} exams={exams} title={category} />
				})
			}

		</Background>
	)
}

export default ExamsByProfessorScreen