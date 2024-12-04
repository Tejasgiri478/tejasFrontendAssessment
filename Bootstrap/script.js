$(document).ready(function() {
    // Initialize datetime pickers
    $('#startDatePicker, #endDatePicker').datetimepicker({
      format: 'YYYY-MM-DD',
      useCurrent: false, // Prevents default selection of current date
    });

    // Open date picker on input click
    $('#startDate, #endDate').focus(function() {
      $(this).parent().data("DateTimePicker").show();
    });

    // Calculate interval on button click
    $('#calculate').click(function() {
      const startDate = moment($('#startDate').val(), 'YYYY-MM-DD');
      const endDate = moment($('#endDate').val(), 'YYYY-MM-DD');

      if (!startDate.isValid() || !endDate.isValid()) {
        $('#output').html('<p>Please select valid dates.</p>');
        return;
      }

      const years = endDate.diff(startDate, 'years');
      const months = endDate.diff(startDate, 'months');
      const weeks = endDate.diff(startDate, 'weeks');
      const days = endDate.diff(startDate, 'days');

      $('#output').html(`
        <p><strong>Date interval between:</strong></p>
        <p>${startDate.format('MM/DD/YYYY')} and ${endDate.format('MM/DD/YYYY')}</p>
        <hr>
        <p><strong>In years:</strong> ${years}</p>
        <p><strong>In months:</strong> ${months}</p>
        <p><strong>In weeks:</strong> ${weeks}</p>
        <p><strong>In days:</strong> ${days}</p>
      `);
    });
  });