var method={
    msg_layer:function(obj){
        //弹框
        $(".msg-layer-bg,.msg-layer").remove();
        $("body").append( '<div class="msg-layer-bg"></div><div class="msg-layer showAlert"><h5></h5><div class="msg-con"></div><div class="layer-close">&times;</div></div>');
        var _layerBg=$(".msg-layer-bg"),_layer=$(".msg-layer"),_close=$(".layer-close"),_cansel=$(".layer-cancel"),_commit=$(".layer-commit");
        _layer.attr("data-animation",obj.type);
        var winH=$(window).height(),winW=$(window).width();
        if(obj.title){
            _layer.find("h5").html(obj.title);
        }else{
            _layer.find("h5").css("display","none")
        }
        if(obj.content){
            _layer.find($(".msg-con")).html(obj.content);
        }else if(obj.url){
            $.get(obj.url,function(data){
                _layer.find($(".msg-con")).html(data);
            });
        }
        _layer.css({"display":"block"});
        _layerBg.css({"display":"block"});
        if(!obj.close  || obj.close == "true"){
            //关闭按钮
            _close.css("display","block");
            _close.on("click",function(){
                method.msg_close();
            })
        }else{
            _close.css("display","none");
        }
        if(obj.btn){
            //按钮
            if(obj.btn[0] != ""){
                _cansel.css("display","inline-block");
                _cansel.val(obj.btn[0]);
                _cansel.on("click",function(){
                    if(obj.callBack1){
                        obj.callBack1();
                        method.msg_close();
                    }else{
                        method.msg_close();
                    }
                })

            }
            if(obj.btn[1] != ""){
                _commit.css("display","inline-block");
                _commit.val(obj.btn[1]);
                _commit.on("click",function(){
                    if(obj.callBack2){
                        obj.callBack2();
                    }
                })
            }
        }
        console.log(_layer.width());
        if(obj.area){
            //宽高
            if(obj.area[0] != "auto" && obj.area[1] != "auto"){
                _layer.css({"width":obj.area[0],"height":obj.area[1],"left":winW/2-parseFloat(obj.area[0])/2,"top":winH/2-parseFloat(obj.area[1])/2});
            }else if(obj.area[0] != "auto" && obj.area[1] === "auto"){
                _layer.css({"width":obj.area[0],"height":obj.area[1],"left":winW/2-parseFloat(obj.area[0])/2,"top":winH/2-(_layer.height()+20)/2});
            }else if(obj.area[0] === "auto" && obj.area[1] != "auto"){
                _layer.css({"width":_layer.width()+20,"height":obj.area[1],"left":winW/2-(_layer.width()+20)/2,"top":winH/2-parseFloat(obj.area[1])/2});
            }
        }else{
            //_layer.css({"width":_layer.width()+20,"height":_layer.height()+40,"left":winW/2-(_layer.width()+20)/2,"top":winH/2-(_layer.height()+30)/2});
            _layer.css({width:_layer.width()+20+"px","margin-top":"-230px","margin-left":"-535px"});
        }
    },
    msg_close:function(){
        //关闭弹框
        var timer=null;
        $(".msg-layer").removeClass('showAlert').addClass("hideAlert");
        timer=setTimeout(function(){
            clearTimeout(timer);
            $(".msg-layer-bg").remove();
            $(".msg-layer").remove();
        },200);
    },
    msg_fade:function (obj){
        if($(".msy-alert").length>0){
            $(".msy-alert").remove();
        }
        $("body").append('<div class="msy-alert showAlert" data-animation="layerFadeIn">'+obj.content+'</div>');
        var msg_timer=null,$msg=$(".msy-alert");
        //$msg.attr("data-animation",obj.type);
        var winH=$(window).height(),winW=$(window).width();
        if(obj.area){
            if(obj.area[0] != "auto" && obj.area[1] != "auto"){
                $msg.css({"width":obj.area[0],"height":obj.area[1],"left":winW/2-parseFloat(obj.area[0])/2,"top":winH/2-parseFloat(obj.area[1])/2});
            }else if(obj.area[0] != "auto" && obj.area[1] === "auto"){
                $msg.css({"width":obj.area[0],"height":obj.area[1],"left":winW/2-parseFloat(obj.area[0])/2,"top":winH/2-($msg.height())/2});
            }else if(obj.area[0] === "auto" && obj.area[1] != "auto"){
                $msg.css({"width":$msg.width()+20,"height":obj.area[1],"left":winW/2-($msg.width())/2,"top":winH/2-parseFloat(obj.area[1])/2});
            }

        }else{
            $msg.css({width:$msg.width()+20+"px","margin":"-"+(($msg.height()+10)/2)+"px 0 0 -"+(($msg.width()+20)/2)+"px"});
        }
        if(obj.line){
            $msg.css("line-height",obj.line)
        }
        msg_timer=window.setTimeout(function(){
            msg_timer=null;
            clearTimeout(msg_timer);
            $(".msy-alert").removeClass('showAlert').addClass("hideAlert").remove();
        },obj.time)
    }



};
