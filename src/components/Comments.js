import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Comments = ({toyId}) => {
    const [text, setText] = useState('')
    const [comments, setComments] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/86comments`)
            .then(response => {
                const filteredComments = response.data.filter(comment => {
                    return comment.toyId === toyId
                })
                setComments(filteredComments)
            })
            .catch(err => console.log(err))
    }, [toyId, refresh])

    const handleSubmit = e => {
        e.preventDefault()

        const newComment = {
            text,
            createdAt: new Date().toJSON(),
            toyId
        }

        axios.post(`${process.env.REACT_APP_API_URL}/86comments`, newComment)
            .then(response => {
                setText('')
                setRefresh(!refresh)
                Swal.fire({
                    title: 'Success!',
                    text: 'Comment sent!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="row">
            <div className="col">
                <h2>Comments</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <textarea 
                            name="text" 
                            id="text" 
                            cols="100" 
                            rows="5"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <button className='btn btn-primary'>Comment</button>
                    </div>
                </form>
                <div>
                    {
                        comments && (
                            <>
                                {
                                    comments.map(comment => {
                                        return (
                                            <div key={comment._id}>
                                                <p>{comment.text}</p>
                                                <p>{ comment.createdAt }</p>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments