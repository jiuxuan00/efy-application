$(function(){
    //ͷ����logoA
    $('#menu').click(function(){
        $(this).hide();
        $('#menu2').show();
        $('.menu-list').slideDown();
    });
    $('#menu2').click(function() {
        $(this).hide();
        $('#menu').show();
        $('.menu-list').slideUp();
    })
    //


    //��ʦ---��Ʒ
    var oParent=$('.master-works');
    oParent.find('.user').css('height',oParent.find('.img-bg').height()+'px');
    oParent.find('.user-nav li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).append('<i class="user-arrow-up"></i>').siblings('li').find('.user-arrow-up').remove();
    });
    //
    $('img').load(function(){
        var box = $('.item');
        var boxHeight = {
            leftBox:[],
            centerBox:[],
            rightBox:[]
        }

        for(var i=0;i<box.length;i++){
            var now = i%3;		//now��ֵΪ0��1��2

            switch(now){
                case 0:
                    box.eq(i).css('left','10px');
                    boxHeight.leftBox.push(box.eq(i).height());
                    var now2 = Math.floor(i/3);

                    if(now2==0){
                        box.eq(i).css('top',0);
                    }else{
                        var total = 0;
                        for(var j=0;j<now2;j++){
                            total += boxHeight.leftBox[j]+10;
                        }
                        box.eq(i).css('top',total+'px')
                    }

                    break;

                case 1:
                    box.eq(i).css('left','270px');
                    boxHeight.centerBox.push(box.eq(i).height());
                    var now2 = Math.floor(i/3);

                    if(now2==0){
                        box.eq(i).css('top',0);
                    }else{
                        var total = 0;
                        for(var j=0;j<now2;j++){
                            total += boxHeight.centerBox[j]+10;
                        }
                        box.eq(i).css('top',total+'px')
                    }
                    break;

                case 2:
                    box.eq(i).css('left','530px');
                    boxHeight.rightBox.push(box.eq(i).height());
                    var now2 = Math.floor(i/3);

                    if(now2==0){
                        box.eq(i).css('top',0);
                    }else{
                        var total = 0;
                        for(var j=0;j<now2;j++){
                            total += boxHeight.rightBox[j]+10;
                        }
                        box.eq(i).css('top',total+'px')
                    }
                    break;
            }
        }
    });



})

var afterNum=1;

function getData3(url){
    $.ajax({
        type:"get",//����get����ʽ
        url:url+afterNum,//��������Ľű���ַ
        data:"",//�������������
        dataType:"json",//�������󷵻ص����ݸ�ʽ
        success:function(data){
            var pubu = $("#attention");
            if(data && data.length>=1){
                for(i in data){
                    for(var key in data[i]){
                        var box = $(" <li> <div class='suit-zt--2-img am-u-sm-5 am-u-end'>" +
                            " <a href='/base/brifProject.do?projectId="+data[i][key].project.id+"'><img src='"+data[i][key].project.picture_url+"'> " +
                            "<div class='tp-bg-0'> " +
                            "<table> <tr><td>" +
                            "<div style='padding: 0 1rem;'>"+data[i][key].project.name+"</div></td></tr> </table> " +
                            "</div></a> </div> <div class='suit-zt--2-text am-u-sm-7 am-u-end'> " +
                            "<h4>"+data[i][key].project.name+"���������</h4> <p>" +
                            "<a href='#'> ���������Ʒ"+key+"��</a></p> </div> </li> </ul>");

                    }

                    pubu.append(box);

                }

            }else{
                alert("��ʱû�и��£������ڴ�")
            }
            PBL("#after","#attention",2);
        },
        error:function(){

            alert("�����ˣ�����ϵ����Ա������");
            return false;
        },
        complete:function(){

        }
    });
}