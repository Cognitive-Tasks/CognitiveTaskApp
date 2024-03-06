<template>
    <tr>
        <th scope="row"><input class="form-check-input" type="checkbox" name="chk" value="" id="flexCheckDefault"></th>
        <th scope="row"> {{ risNum }}</th>
        <td>{{ risId }}</td>
        <td>{{ risData }}</td>
        <td>{{ risType }}</td>
        <td><a href="http://www.samsung.com" target="_blank" title="file .csv">scarica</a></td>
    </tr>
</template>

<script>
export default {
    props: ['risNum', 'risId', 'risData', 'risType'],
}
</script>