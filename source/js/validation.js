var valid = (function () {
    var pattEmpty = new RegExp('([^\\s*]+)'),
        pattMail = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'),
        pattName = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9][а-яА-ЯёЁa-zA-Z0-9-_\.]{5,20}$'),
        pattArea = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9][а-яА-ЯёЁa-zA-Z0-9-_\.]{9,100}$'),



        _submitForm = function (form) {
            var checkresult = true,

                checkData = function (elem) {
                    switch ($(elem).attr('name')) {
                        case 'name' :
                            return checkName(elem);
                        break;
                        case 'email' :
                            return checkMail(elem);
                        break;
                        case 'comment' :
                            return checkArea(elem);
                        break;

                        default:
                                return checkEmpty(elem);
                    }
                },

                checkEmpty = function (elem) {
                    if (!pattEmpty.test(elem.value)) {
                        showError(elem);
                        return false;
                    } else {
                        return true;
                    }
                },

                checkName = function (elem) {
                    if (!pattName.test(elem.value)) {
                            showError(elem);
                            return false;
                    } else if (!pattEmpty.test(elem.value)) {
                            showError(elem);
                            return false;
                    }else {
                            return true;
                    }
                },
                checkMail = function (elem) {
                     if (!pattMail.test(elem.value)) {
                            showError(elem);
                            return false;
                    } else if (!pattEmpty.test(elem.value)) {
                            showError(elem);
                            return false;
                    } else {
                            return true;
                    }
                },

                checkArea = function (elem) {
                    if (!pattArea.test(elem.value)) {
                            showError(elem);
                            return false;
                    } else if (!pattEmpty.test(elem.value)) {
                            showError(elem);
                            return false;
                    } else {
                            return true;
                    }
                },

                showError = function(elem) {
                    $(elem).prev().removeClass('hide').addClass('show');
                },

                sendData = function(form) {
                    var name = $('input[name=name]').val(),
                        email = $('input[name=email]').val(),
                        comment = $('input[name=comment]').val();

                    $('#modal').addClass('success');
                    $('#close').on('click', function (e) {
                        e.preventDefault();
                        $('#modal').removeClass('success');
                    });

                    $.ajax({
                        url: form.attr('action'),
                        method: 'POST',
                        data: {
                            name: name,
                            email: email,
                            comment: comment
                        }
                    }).done(function (data){
                        var jsoned = JSON.parse(data);
                        $('form')[0].reset();
                    });
                };


            return {
                sub : function (elem) {
                    var data = elem.find('input, textarea');
                    $.each(data, function (i, val) {
                        if (checkData(val) == false) {
                            checkresult = false;

                        }
                    });
                    if (checkresult == true) {
                        console.log('otpravleno');
                        sendData(elem);
                        return true;
                    }
                }
            }
        }

        $('form').on('submit', function (e) {
            e.preventDefault();
            console.log($(this));
            _submitForm().sub($(this));
        });

        $('input, textarea').focus(function (e) {
            $(this).prev().removeClass('show').addClass('hide');
        });
})();
