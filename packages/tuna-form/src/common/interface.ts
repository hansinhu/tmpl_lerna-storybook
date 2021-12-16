import { ReactNode } from 'react'

export interface FormProps {
  name?: string
	list?: string[]
  children?: ReactNode
}

export interface IFormItem {
  name?: string
	list?: string[]
  children?: ReactNode
}