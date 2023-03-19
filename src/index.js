import React from 'react'
import styles from './styles.module.css'

export const Button =(props)=>{
  return (<button {...props}>{props.text}</button>) // kod içerisinde girilen propertileri prop şeklinde alır ve böylece hepsini tek tek yazmak yerine {prop} şeklinde kısaca kullanırız.
}