import { Tweet } from '../typings'

export const fetchTweets = async () => {
  const res = await fetch(
    `https://twitter-clone-gilt-two.vercel.app/api/getTweets`
  )
  const data = await res?.json()
  const tweets: Tweet[] = data.tweets
  return tweets
}
