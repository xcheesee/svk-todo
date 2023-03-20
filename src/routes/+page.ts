import type { Category, Todo } from "../../../../../../../Users/x529427/Documents/repos/svk-todo/src/utils/types"
import type { PageLoad } from "./$types"
export const load = (async ({fetch, depends}) => {
    const categories: Category[] = await (await fetch("http://localhost:8080/cats")).json()
    const todos: Todo[] = await (await fetch("http://localhost:8080/todos")).json()

    depends("app:todos")
    return { todos, categories }

}) satisfies PageLoad