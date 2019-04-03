
$(document).ready(function() {
    $('#example').DataTable( {
    ajax: {
        url: 'https://swapi.co/api/planets/',
        dataSrc: 'results'
    },
        columns: [
            { data: 'name' },
            { data: 'rotation_period' },
            { data: 'orbital_period' },
            { data: 'diameter' },
            { data: 'climate' },
            { data: 'gravity'},
            { data: 'terrain'},
            { data: 'surface_water'},
            { data: 'population'}
        
        ]
    } );
});
            