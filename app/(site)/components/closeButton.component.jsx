'use client'
 
import { useRouter } from 'next/navigation'
 
export default function CloseButton() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.back()}>
        Close
    </button>
  )
}