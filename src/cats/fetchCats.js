export function fetchCats() {
    return fetch('/cats').then(res => res.json());
}