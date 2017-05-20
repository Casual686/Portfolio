var validLogon = (function () {
    var pattEmpty = new RegExp('([^\\s*]+)'),
        pattLogin = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9][а-яА-ЯёЁa-zA-Z0-9-_\.]{5,20}$'),
        pattPassword = new RegExp('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
        inpitArea = $('.logon-input_area'),
        match_arr = {
    		"username" : /^[а-яА-ЯёЁa-zA-Z0-9][а-яА-ЯёЁa-zA-Z0-9-_\.]{5,20}$/g,
    		"password" : /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g,
    		"empty" : /([^\\s*]+)/g
	},

        _logon = function (form) {
            var checkresult = true,

                checkData = function (elem) {
                    switch ($(elem).attr('name')) {
                        case 'user' :
                            return checkLogin(elem);
                        break;
                        case 'password' :
                            return checkPassword(elem);
                        break;
                        case 'norobot' :
                            return checkNorobot(elem);
                        break;
                        case 'robot' :
                            return checkRobot(elem);
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

                checkLogin = function (elem) {
                    if (!pattLogin.test(elem.value)) {
                            showError(elem);
                            return false;
                    } else if (!pattEmpty.test(elem.value)) {
                            showError(elem);
                            return false;
                    }else {
                            inpitArea.addClass('valid');
                            return true;
                    }
                },

                checkPassword = function (elem) {
                     if (!pattPassword.test(elem.value)) {
                            showError(elem);
                            return false;
                    } else if (!pattEmpty.test(elem.value)) {
                            showError(elem);
                            return false;
                    } else {
                            inpitArea.addClass('valid');
                            return true;
                    }
                },

                checkNorobot = function (elem) {
                    if (!$('#checkbox').prop('checked')) {
                            showError(elem);
                            return false;
                    } else {
                            return true;
                    }
                },

                checkRobot = function (elem) {
                    var rdBtn = $('#radio1');
                    if (!$('#radio1').prop('checked')) {
                            showError(elem);
                            return false;
                    } else {
                            return true;
                    }
                },

                showError = function(elem) {
                    $('#modal').addClass('error');
                    $('#close').on('click', function (e) {
                        e.preventDefault();
                        $('#modal').removeClass('error');
                    });
                },

                sendData = function(form) {
                    var name = $('input[name=user]').val(),
                        email = $('input[name=password]').val();
                        console.log('voshli');
                    }

            return {
                sub : function (elem) {
                    var data = elem.find('input, radio, checkbox');
                    $.each(data, function (i, val) {
                        if (checkData(val) == false) {
                            checkresult = false;

                        }
                    });
                    if (checkresult == true) {
                        sendData(elem);
                        return true;
                    }
                },
                wach : function (elem) {
                    var fields = elem.find('input');

                    fields.on("keyup", function(){
                		var field = $(this),
                			check_type = field.data("check"),
                			check_empt = field.data("checkempty"),
                			value = field.val();

                        if(value.match(match_arr[check_type])) {
                    			field.removeClass("error").addClass("valid");
                    	}else{
                    			field.removeClass("valid").addClass("error");
                    	};
                    });
                }
            }
        }

        $('#enter').on('click', function (e) {
            e.preventDefault();
            _logon().sub($('#logon'));
        });

        _logon().wach($('#logon'))

})();
