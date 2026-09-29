import {
  useEffect,
  useState,
  type FormEvent,
} from 'react'
import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import { supabase } from '../../lib/supabase'
import type { GuestbookEntry } from '../../types/guestbook'

function Guestbook() {
  const [comments, setComments] = useState<GuestbookEntry[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    async function loadComments() {
      setIsLoading(true)
      setErrorMessage('')

      const { data, error } = await supabase
        .from('yearbook_comments')
        .select('*')
        .order('created_at', {
          ascending: false,
        })

      if (error) {
        setErrorMessage(
          'We could not load the messages. Please try again.'
        )
      } else {
        setComments(data ?? [])
      }

      setIsLoading(false)
    }

    loadComments()
  }, [])

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const cleanName = name.trim()
    const cleanMessage = message.trim()

    setErrorMessage('')
    setSuccessMessage('')

    if (cleanName.length < 2) {
      setErrorMessage(
        'Please enter a name with at least two characters.'
      )
      return
    }

    if (!cleanMessage) {
      setErrorMessage('Please write a message before submitting.')
      return
    }

    setIsSubmitting(true)

    const { data, error } = await supabase
      .from('yearbook_comments')
      .insert({
        name: cleanName,
        message: cleanMessage,
      })
      .select()
      .single()

    if (error) {
      setErrorMessage(
        'Your message could not be submitted. Please try again.'
      )
    } else {
      setComments((currentComments) => [
        data,
        ...currentComments,
      ])

      setName('')
      setMessage('')
      setSuccessMessage(
        'Your message has been added to the yearbook.'
      )
    }

    setIsSubmitting(false)
  }

  function formatDate(date: string) {
    return new Intl.DateTimeFormat('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(date))
  }

  return (
    <SectionWrapper
      id="guestbook"
      className="bg-[#f5ecdc] text-[#00344d]"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#c90016]">
            Leave Your Mark
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
            Team Tech Guestbook
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#516a76]">
            Share a memory, a message or a word of encouragement
            with the Technical Department.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="bg-[#00344d] p-6 text-white shadow-xl sm:p-8"
          >
            <h3 className="text-2xl font-black uppercase">
              Leave a Message
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/65">
              Your message will be visible to everyone visiting
              the yearbook.
            </p>

            <div className="mt-7">
              <label
                htmlFor="guestbook-name"
                className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]"
              >
                Your name
              </label>

              <input
                id="guestbook-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={50}
                required
                placeholder="Enter your name"
                className="w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#ef3340]"
              />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <label
                  htmlFor="guestbook-message"
                  className="text-xs font-bold uppercase tracking-[0.14em]"
                >
                  Your message
                </label>

                <span className="text-xs text-white/50">
                  {message.length}/300
                </span>
              </div>

              <textarea
                id="guestbook-message"
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                maxLength={300}
                required
                rows={6}
                placeholder="Share a memory or leave a message..."
                className="w-full resize-none border border-white/20 bg-white/10 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/40 focus:border-[#ef3340]"
              />
            </div>

            {errorMessage && (
              <p
                role="alert"
                className="mt-4 text-sm font-semibold text-[#ff8b94]"
              >
                {errorMessage}
              </p>
            )}

            {successMessage && (
              <p
                role="status"
                className="mt-4 text-sm font-semibold text-[#9de0b2]"
              >
                {successMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-[#c90016] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#00344d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? 'Adding Message...'
                : 'Add to Guestbook'}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c90016]">
                  Messages
                </p>

                <h3 className="mt-2 text-3xl font-black uppercase">
                  From the Team
                </h3>
              </div>

              <p className="text-sm font-bold text-[#59717d]">
                {comments.length}{' '}
                {comments.length === 1 ? 'message' : 'messages'}
              </p>
            </div>

            {isLoading ? (
              <div className="bg-white p-8 text-center text-sm text-[#59717d]">
                Loading messages...
              </div>
            ) : comments.length === 0 ? (
              <div className="border border-[#d7e0e4] bg-white p-8 text-center">
                <p className="font-bold">
                  No messages yet.
                </p>

                <p className="mt-2 text-sm text-[#59717d]">
                  Be the first person to leave a message.
                </p>
              </div>
            ) : (
              <div className="max-h-[650px] space-y-4 overflow-y-auto pr-1">
                {comments.map((comment) => (
                  <article
                    key={comment.id}
                    className="border-l-4 border-[#c90016] bg-white p-5 shadow-sm sm:p-6"
                  >
                    <p className="whitespace-pre-wrap break-words text-sm leading-7 text-[#294b5c] sm:text-base">
                      “{comment.message}”
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm font-black uppercase text-[#00344d]">
                        {comment.name}
                      </p>

                      <time
                        dateTime={comment.created_at}
                        className="text-xs font-semibold uppercase tracking-[0.08em] text-[#758891]"
                      >
                        {formatDate(comment.created_at)}
                      </time>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Guestbook