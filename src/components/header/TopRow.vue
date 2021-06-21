<style scoped>
  .name-group{
    color: blue;
    font-size: 1.5rem;
  }
  .name-group span {
    color: black;
    font-size: 1.5rem;
  }
</style>
<template>

<b-row >
  <b-col >
    <strong>
      <b-list-group >
        <b-list-group-item class="name-group">
          <b-icon icon="arrow-left" aria-hidden="true"></b-icon>
          <span class="vertical-size">|</span>
          <b-icon icon="person-fill" aria-hidden="true" class=".ms-4"></b-icon>
          <span>
            Nombre de Persona Física
          </span>
        </b-list-group-item>
      </b-list-group>
    </strong>
  </b-col>
  <b-col></b-col>
  <b-col>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Buscar por nombre" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-primary" type="button" id="button-addon2"><b-icon icon="search"></b-icon></button>
    </div>
  </b-col>
  </b-row>
</template>

<script>
export default {
  name:"TopRow",
  data() {
    return {

    }
  },
}
</script>