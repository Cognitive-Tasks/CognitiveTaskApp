<template >
    <tr>
        <td><input class="form-check-input" type="checkbox" name="chk" value="" id="flexCheckDefault"></td>
        <td>{{  sessionNum }}</td>
        <td>{{ sessionId }}</td>
        <td>{{ sessionData }}</td>
        <td>{{ sessionType }}</td>
        <td>{{ sessionState }}</td>
        <td>
            <a href="http://samsung.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </a>
        </td>
    </tr>
</template>

<script>

export default {
    props: ['sessionNum', 'sessionId', 'sessionData', 'sessionType', 'sessionState'],
}
</script>