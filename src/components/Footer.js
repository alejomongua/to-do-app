import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../redux/actions'

const Footer = () => (
  <p>
    Mostrar: <FilterLink filter={VisibilityFilters.SHOW_ALL}>Todos</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Activos</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completados</FilterLink>
  </p>
)

export default Footer
